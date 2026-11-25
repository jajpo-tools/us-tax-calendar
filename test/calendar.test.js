// Checks the calendar files against RFC 5545 basics and against dates.json.
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const read = (f) => fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
const plain = read('freelancer-tax-dates.ics');
const reminders = read('freelancer-tax-dates-reminders.ics');
const dates = JSON.parse(read('dates.json'));

/** Unfolds continuation lines and returns the VEVENTs as { NAME: value } objects. */
function events(ics) {
  const lines = ics.replace(/\r\n[ \t]/g, '').split('\r\n');
  const out = [];
  let cur = null;
  for (const l of lines) {
    if (l === 'BEGIN:VEVENT') cur = {};
    else if (l === 'END:VEVENT') { out.push(cur); cur = null; } else if (cur && !l.startsWith('BEGIN:VALARM') && !l.startsWith('END:VALARM')) {
      const i = l.indexOf(':');
      const name = l.slice(0, i).split(';')[0];
      if (!(name in cur)) cur[name] = l.slice(i + 1);
    }
  }
  return out;
}

for (const [name, ics] of [['plain', plain], ['reminders', reminders]]) {
  test(`${name}: CRLF lines of at most 75 octets, one calendar`, () => {
    assert.ok(ics.endsWith('\r\n'));
    assert.ok(!/[^\r]\n/.test(ics), 'every line ends with CRLF');
    for (const line of ics.split('\r\n')) assert.ok(Buffer.byteLength(line, 'utf8') <= 75, `too long: ${line}`);
    assert.match(ics, /^BEGIN:VCALENDAR\r\nVERSION:2\.0\r\nPRODID:/);
    assert.match(ics, /END:VCALENDAR\r\n$/);
    assert.match(ics, /X-WR-CALNAME:US freelancer tax dates/);
  });

  test(`${name}: every event is all-day, unique and matches dates.json`, () => {
    const ev = events(ics);
    assert.equal(ev.length, dates.events.length);
    const uids = new Set();
    ev.forEach((e, i) => {
      for (const k of ['UID', 'DTSTAMP', 'DTSTART', 'DTEND', 'SUMMARY', 'DESCRIPTION', 'URL']) assert.ok(e[k], `${k} in event ${i}`);
      assert.ok(!uids.has(e.UID)); uids.add(e.UID);
      assert.equal(e.DTSTART, dates.events[i].date.replace(/-/g, ''));
      assert.ok(e.DTEND > e.DTSTART);
      assert.match(e.URL, /^https:\/\/jajpo\.com\//);
      assert.match(e.DESCRIPTION, /not tax advice/);
    });
  });
}

test('only the reminders file has 7-day alarms', () => {
  assert.ok(!plain.includes('BEGIN:VALARM'));
  assert.equal((reminders.match(/BEGIN:VALARM/g) || []).length, dates.events.length);
  assert.ok(reminders.includes('TRIGGER:-P7D'));
});

test('dates fall on business days and include the 2026 estimated tax dates', () => {
  for (const e of dates.events) {
    const day = new Date(e.date + 'T00:00:00Z').getUTCDay();
    assert.ok(day >= 1 && day <= 5, `${e.date} is a weekday`);
  }
  const all = dates.events.map((e) => e.date);
  for (const d of ['2026-04-15', '2026-06-15', '2026-09-15', '2027-01-15', '2027-02-01', '2027-04-15']) assert.ok(all.includes(d), d);
});
