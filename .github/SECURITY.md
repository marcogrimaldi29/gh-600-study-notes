# Security Policy

GH-600 Study Notes is a static site, built with Astro and published to GitHub Pages. There are no accounts and nothing
to sign in to, and search runs entirely in your browser, built from the site's own pages. The only things the site
stores are your light or dark theme choice and whether you've folded the sidebar, both kept in your own browser.
Analytics are cookieless, through [Umami](https://umami.is/). That leaves a small attack surface, but security reports
are still welcome, and I'd rather hear about a problem privately before it's public.

---

## 🛡️ Supported Versions

There are no releases. Only what's live is maintained.

| Version | Supported |
| --- | --- |
| The live site at [marcogrimaldi29.com/gh-600-study-notes](https://marcogrimaldi29.com/gh-600-study-notes/) and the `main` branch | ✅ |
| Older commits, forks and copies hosted elsewhere | ❌ |

## 📮 Reporting a Vulnerability

**Please don't open a public issue or comment.** Report it privately through GitHub instead: open the repo's
**Security** tab and choose **Report a vulnerability**, or go straight to the
[private report form](https://github.com/marcogrimaldi29/gh-600-study-notes/security/advisories/new). Only you and I can
see the report, and we can discuss and fix the problem there before anything is made public.

It helps to include:

- The affected URL, or the file in this repo
- What the problem is and what someone could do with it
- The steps to reproduce it, or a short proof of concept

Please don't include real secrets, tokens or anyone else's personal data in the report. Only test against your own
copy or the public pages, and don't run high-volume or denial-of-service tests against the site.

If you can't use GitHub, send me a private message on [LinkedIn](https://www.linkedin.com/in/marco-grimaldi29/)
instead, starting it with **"Security: GH-600 Study Notes"** so it's easy to spot.

## 🎯 Scope

**In scope:**

- The published site, including its pages, scripts and assets
- This repository's source code and its GitHub Actions workflow
- A dependency version used here that has a known vulnerability

**Out of scope:**

- **GitHub, GitHub Copilot or any other GitHub product.** Report these through the
  [GitHub Bug Bounty](https://bounty.github.com/) program.
- **A vulnerability in Astro, Mermaid, Shiki, Primer Octicons or another dependency itself.** Report it to that
  project. If this repo uses an affected version, let me know as well.
- **HTTP response headers set by GitHub Pages.** The repo can't change them.
- **Automated scanner output** with no demonstrated impact on this site.
- **An insecure pattern in the notes**, such as a workflow sample with broader `permissions:` than it needs, or an MCP
  configuration that hard-codes a token. That's a content issue, so it's welcome as a public issue. See the
  [contributing guide](CONTRIBUTING.md).

## ⏱️ What to Expect

I maintain this repo on my own, so responses are best effort. I'll confirm I've received your report, keep you posted
in the private report while I look into it, and tell you when it's fixed. If you'd like credit, say so and I'll credit
you in the security advisory or the fix.

Dependabot alerts and security updates are turned on for this repo, so known vulnerabilities in dependencies are usually
caught and patched without a report.
