# US tax calendar for freelancers (.ics)

[![tests](https://github.com/jajpo-tools/us-tax-calendar/actions/workflows/test.yml/badge.svg)](https://github.com/jajpo-tools/us-tax-calendar/actions/workflows/test.yml)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A free calendar of **US federal tax deadlines for freelancers, 1099 contractors and the self-employed**. Subscribe once in Google Calendar, Apple Calendar or Outlook, and the dates show up and stay up to date:
- quarterly estimated tax payments
- the January exception
- the Form 1099-NEC deadline
- the tax return due date

Every date comes from IRS publications. Each event links to a free calculator, so you can work out what to pay.

## Subscribe

Calendar address:

```text
https://raw.githubusercontent.com/jajpo-tools/us-tax-calendar/main/freelancer-tax-dates.ics
```

- **Google Calendar (on a computer):** next to "Other calendars", click **+**, then **From URL**. Paste the address and click **Add calendar**. It shows up on your phone too.
- **Apple Calendar:**
  - Mac: **File → New Calendar Subscription**, then paste the address.
  - iPhone: Settings → Calendar → Accounts → Add Account → Other → **Add Subscribed Calendar**.
- **Outlook.com:** **Add calendar → Subscribe from web**, then paste the address.

Want a reminder a week before each date? Use the version with reminders instead:

```text
https://raw.githubusercontent.com/jajpo-tools/us-tax-calendar/main/freelancer-tax-dates-reminders.ics
```

Some calendar apps ignore reminders in subscribed calendars. If yours does, set your own alert, or download the file and import it.

**Download instead:** [freelancer-tax-dates.ics](freelancer-tax-dates.ics) imports a one-time copy, which won't update. To pick the dates and the reminder time yourself, use the [Tax Deadline Calendar](https://jajpo.com/taxes/tax-deadline-calendar/).

## The dates

<!-- dates:start -->
| Date | What's due | Work it out |
|---|---|---|
| Wed, Apr 15, 2026 | First estimated tax payment due for 2026 | [jajpo.com/taxes/quarterly-tax-calculator/](https://jajpo.com/taxes/quarterly-tax-calculator/) |
| Mon, Jun 15, 2026 | Second estimated tax payment due for 2026 | [jajpo.com/taxes/quarterly-tax-calculator/](https://jajpo.com/taxes/quarterly-tax-calculator/) |
| Tue, Sep 15, 2026 | Third estimated tax payment due for 2026 | [jajpo.com/taxes/quarterly-tax-calculator/](https://jajpo.com/taxes/quarterly-tax-calculator/) |
| Fri, Jan 15, 2027 | Fourth estimated tax payment due for 2026 | [jajpo.com/taxes/quarterly-tax-calculator/](https://jajpo.com/taxes/quarterly-tax-calculator/) |
| Mon, Feb 1, 2027 | Forms 1099-NEC due for payments made in 2026 | [jajpo.com/taxes/1099-nec-checker/](https://jajpo.com/taxes/1099-nec-checker/) |
| Mon, Feb 1, 2027 | Last day to file and pay in full and skip the January 2026 estimated payment | [jajpo.com/taxes/quarterly-estimated-taxes/](https://jajpo.com/taxes/quarterly-estimated-taxes/) |
| Thu, Apr 15, 2027 | 2026 federal tax return and payment due | [jajpo.com/taxes/1099-tax-calculator/](https://jajpo.com/taxes/1099-tax-calculator/) |
<!-- dates:end -->

A due date that falls on a weekend or a federal holiday moves to the next business day. The dates above already include that. The IRS sometimes extends deadlines after a disaster declaration, so check [IRS.gov](https://www.irs.gov/newsroom/tax-relief-in-disaster-situations) if that applies to you.

## Updates

The 2027 dates are added once the IRS publishes the 2027 Form 1040-ES, usually in January. Subscribers get them without doing anything. `dates.json` has the same dates for developers.

## Sources

- [Form 1040-ES (2026)](https://www.irs.gov/pub/irs-pdf/f1040es.pdf) and [Publication 505](https://www.irs.gov/publications/p505): estimated tax dates and the January exception
- [Instructions for Forms 1099-MISC and 1099-NEC](https://www.irs.gov/instructions/i1099mec): the January 31 deadline and the $2,000 threshold for 2026 payments
- [26 U.S.C. 7503](https://www.law.cornell.edu/uscode/text/26/7503): weekend and holiday rule

The figures behind the calculators are open data too: [us-tax-data](https://github.com/jajpo-tools/us-tax-data).

## License

MIT. Maintained by [JAJPO](https://jajpo.com/): free tax and invoicing tools for US freelancers. General information, not tax advice.
