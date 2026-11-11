# Contributing to GH-600 Study Notes

Thanks for helping keep these notes accurate. They cover **Exam GH-600: Developing in Agentic AI Systems**, the exam
behind the *GitHub Certified: Agentic AI Developer* certification. GitHub Copilot ships changes weekly, and agent
features move from public preview to general availability, get renamed or change their defaults between one look at
the docs and the next. Reports from people studying with the notes are the quickest way to catch that.

> [!IMPORTANT]
> **This repo takes issues, not pull requests.** Pull requests are turned off: I make every change myself and check it
> against the official documentation, so the pages keep one voice and agree with each other. If you know exactly how
> something should read, put your proposed wording in the issue. That's just as useful to me.

---

## Contents

- [Ways to Help](#-ways-to-help)
- [Before You Open an Issue](#-before-you-open-an-issue)
- [Opening an Issue](#-opening-an-issue)
- [Out of Scope](#-out-of-scope)
- [What Happens Next](#-what-happens-next)
- [Code of Conduct](#-code-of-conduct)
- [Security](#-security)

## 🙌 Ways to Help

The issue template has five types, and every report fits one of them:

| Type | What it covers | For example |
| --- | --- | --- |
| **Content error** | Text, a table, a callout, a diagram or a code sample is wrong | A hooks sample uses an event name Copilot doesn't fire, or a decision table sends a scenario to the wrong control |
| **Outdated or renamed** | GitHub Copilot or the exam has changed since the page was written | A feature left public preview, a default changed, or an entry in the renames table on the Foundations page has been renamed again |
| **Exam coverage** | The notes don't match the official study guide | The study guide's **Skills measured** list has changed since May 4, 2026, or it lists a skill the notes don't cover |
| **Site bug** | Search, navigation, the theme switcher, diagrams, layout, a broken link or accessibility | A Mermaid diagram keeps its light colours in dark mode, a search result lands on the wrong section, a table overflows on a phone, or a control can't be reached with the keyboard |
| **Suggestion** | Something could be clearer or easier to study | A topic that would read better as a comparison table or a decision tree, another exam caveat, or a scenario missing from the lookup table on the Exam Tips page |

## 🔎 Before You Open an Issue

- **Search the existing issues**, [open and closed](https://github.com/marcogrimaldi29/gh-600-study-notes/issues?q=is%3Aissue).
  If yours is already there, add a 👍 reaction, or a comment with anything new, rather than opening a duplicate.
- **Check the study guide.** The notes are written against the **study guide revision of May 4, 2026**. The
  [GH-600 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600) has
  no dated "Skills measured as of" heading, and the "Last updated on" date at the bottom of the page changes with small
  edits too, so a newer date doesn't always mean the skills have changed. Compare the list under its
  [Skills measured](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600#skills-measured)
  heading with the notes, and if they differ, say so in the issue along with the date the page shows.
- **Check the current docs.** The [GitHub Copilot documentation](https://docs.github.com/en/copilot) and the
  [Copilot changelog](https://github.blog/changelog/label/copilot/) usually confirm whether something has changed or
  been renamed, and give you the link the issue asks for.
- **Check the Learn-versus-docs list.** Where the course's Learn modules and GitHub Docs disagree, the notes follow the
  docs and list the difference under
  [Where Learn and the docs disagree](https://marcogrimaldi29.com/gh-600-study-notes/exam-tips/#learn-vs-docs). If yours
  isn't there yet, it's a welcome report.
- **One problem per issue.** Separate issues are easier to track, fix and close. Several typos on the same page can go
  in one issue.
- **For a site bug, hard-refresh first** (Ctrl+F5, or Cmd+Shift+R on a Mac) in case your browser is showing an older
  copy of the page.

## 📝 Opening an Issue

1. Open a new issue with the
   [🐞 Report an Issue](https://github.com/marcogrimaldi29/gh-600-study-notes/issues/new?template=ISSUE_TEMPLATE.md)
   template.
2. Give it a title that names the page and the problem, for example *"Skill 2: firewall section uses an old setting
   name"* rather than *"Mistake on page"*.
3. Mark the type, then fill in the template's sections. Leave out any that don't apply.

> [!TIP]
> To link straight to a section, click it in **On this page**, then copy the address from your browser.

### What Makes a Report Easy to Fix

- **A link to the exact section**, not just the page
- **The text as the notes have it**, quoted, so I can find it even if the page has moved on
- **An official source** for any content change. GitHub Docs is best for product behaviour, and the study guide or the
  GH-600T00-A course for exam coverage. A report without one may take longer, because every change has to be checked
  against the documentation before it goes in
- **For a configuration sample:** which file it is (an agent profile, `copilot-setup-steps.yml`, an MCP server config, a
  hooks file or an agentic workflow) and the line or key that's wrong
- **For a site bug:** the steps to reproduce it, what you expected and what happened instead, the device, operating
  system and browser, and a screenshot if it shows the problem
- **Your proposed wording**, if you have it. With pull requests turned off, this is the closest thing to suggesting an
  edit directly

## 🚫 Out of Scope

To keep the notes accurate and the issue tracker useful, please don't open issues for:

- **Live exam content.** Questions, answers or topics remembered from a real exam break
  [Microsoft's exam security policy](https://learn.microsoft.com/en-us/credentials/support/exam-and-assessment-lab-security-policies).
  Issues or comments that include them will be closed and the content removed.
- **Exam booking, scores, retakes or item challenges.** The GitHub Certifications section of
  [Microsoft Credentials support](https://learn.microsoft.com/en-us/credentials/support/help) covers those, including
  how to challenge an exam question you think is wrong.
- **Help with your own Copilot setup.** For troubleshooting your own repository, organization, agent, MCP server or
  Copilot plan, ask in GitHub Community's
  [Copilot Conversations](https://github.com/orgs/community/discussions/categories/copilot-conversations).
- **Anything private.** Issues are public, so leave out tokens and secrets, private repository names and code, and
  organization, enterprise or customer details. That includes screenshots and pasted agent session logs, which can
  contain all of these.
- **Unofficial sources.** Practice-test sites, exam dump sites and AI chat answers (Copilot Chat's own answers included)
  aren't accepted as the source for a content change.
- **Promotion.** Links to courses, products or services, affiliate links and paid placements won't be added.
- **Security vulnerabilities.** Please
  [report these privately](https://github.com/marcogrimaldi29/gh-600-study-notes/security/advisories/new), as the
  [security policy](SECURITY.md) explains, not in a public issue.

## 🔄 What Happens Next

- I maintain the notes on my own, in my spare time, so replies are best effort and there's no fixed response time.
- I check each report against the official documentation. If I need more details, I'll ask on the issue, so keep an
  eye on your GitHub notifications.
- When a fix goes in, I close the issue with a note on what changed, or a link to the commit. The live site updates
  shortly after.
- If nothing changes, I close the issue with the reason, such as out of scope, can't be verified, or working as
  intended.
- An issue waiting on a reply may be closed after a while. Comment with the missing details and I can reopen it.

## 🤝 Code of Conduct

By opening, commenting on or reacting to issues here, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).
Comments that are abusive, spam or share live exam content may be hidden, edited or locked.

## 🔒 Security

Found a security problem with the site or this repo? Please don't report it in a public issue. Use
[Report a vulnerability](https://github.com/marcogrimaldi29/gh-600-study-notes/security/advisories/new) instead, so only
you and I can see it. The [security policy](SECURITY.md) has the details.

---

If the notes helped you, the README's [💚 Support](https://github.com/marcogrimaldi29/gh-600-study-notes#-support)
section has a couple of ways to show it. Thanks for helping make them better for the next GH-600 candidate.
