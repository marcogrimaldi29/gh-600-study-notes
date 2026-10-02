# 🤖 GH-600 Study Notes

**📖 Read them at [marcogrimaldi29.com/gh-600-study-notes](https://marcogrimaldi29.com/gh-600-study-notes/)**

Exam-focused study notes for **Exam GH-600: Developing in Agentic AI Systems**, the exam behind the
*GitHub Certified: Agentic AI Developer* certification. They cover how AI agents plan, act and get evaluated inside
GitHub — and which control, file or setting keeps them safe — with GitHub as the system of record and control plane.

📅 Written against the **GH-600 skills measured, study guide revision of May 4, 2026**.

---

## 📚 What's Inside

| Page | Covers | Exam weight |
| --- | --- | --- |
| [Agentic Foundations](https://marcogrimaldi29.com/gh-600-study-notes/agentic-foundations/) | Assistant vs agent, plan → act → evaluate, GitHub as system of record and control plane, the contributor model, every Copilot agent surface, the customization stack and the renames you will meet | Prerequisite |
| [Skill 1 · Architecture & SDLC](https://marcogrimaldi29.com/gh-600-study-notes/skill-1-architecture-sdlc/) | Scoping agents to SDLC stages, anti-patterns, task contracts, plan-first vs plan + execution, structured and validated plans, autonomy and human intervention | 15–20% |
| [Skill 2 · Tools & MCP](https://marcogrimaldi29.com/gh-600-study-notes/skill-2-tools-environments/) | Tool selection and permissions, MCP servers, the GitHub remote MCP server, registries and allowlists, execution context, CI invocation, setup steps, firewall, retries, rollback and escalation | 20–25% |
| [Skill 3 · Memory & State](https://marcogrimaldi29.com/gh-600-study-notes/skill-3-memory-state/) | Short-term, long-term and external memory, Copilot Memory, expiration and pruning, durable state, resuming work, drift, conflicting and stale context | 10–15% |
| [Skill 4 · Evaluation & Tuning](https://marcogrimaldi29.com/gh-600-study-notes/skill-4-evaluation-tuning/) | Success criteria, qualitative and quantitative signals, scanning as quality gates, reading session logs and traces, root-cause classes, tuning instructions, memory and tools | 15–20% |
| [Skill 5 · Multi-Agent](https://marcogrimaldi29.com/gh-600-study-notes/skill-5-multi-agent/) | Orchestration patterns, subagents and fleet mode, isolation and concurrency, conflict arbitration, evidence and handoffs, recovery, and the agent lifecycle | 15–20% |
| [Skill 6 · Guardrails](https://marcogrimaldi29.com/gh-600-study-notes/skill-6-guardrails/) | Risk classification and autonomy levels, rulesets, CODEOWNERS and environments, hooks that block, least privilege, and approvals that actually reduce risk | 10–15% |
| [Configuration Reference](https://marcogrimaldi29.com/gh-600-study-notes/config-reference/) | Agent profiles, instructions, skills, `copilot-setup-steps.yml`, MCP JSON, hooks, Agentic Workflows frontmatter, Copilot CLI flags and the Actions YAML that gates it all | Deep dive |
| [Exam Tips & Caveats](https://marcogrimaldi29.com/gh-600-study-notes/exam-tips/) | Key numbers, Learn-vs-docs discrepancies, commonly confused pairs, decision trees, a scenario-to-answer lookup table and a pre-exam checklist | Final review |

Every page carries diagrams, decision tables, configuration samples and exam-caveat callouts.

## ✨ Reading Experience

- **Site-wide search** (<kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>K</kbd> or <kbd>/</kbd>) across every page, jumping straight to the matching section
- **Two-rail navigation** — the page list on the left, and an **On this page** outline on the right that follows you as you scroll
- **Light and dark mode**, switched by the sunrise brand mark that rises into a full sun
- **Diagrams** that follow the active theme, and syntax-highlighted configuration samples
- Designed for phones, tablets and laptops alike, with keyboard and screen-reader support

## 🤖 A Note on AI

These notes were researched and written **with the help of AI — [Claude](https://claude.com/claude-code)**, Anthropic's
assistant, working from the official GH-600 study guide, the GH-600T00-A course and its Microsoft Learn modules, and the
GitHub Copilot documentation. Every page was reviewed before publication, but AI-assisted writing can still get details
wrong, and GitHub Copilot changes quickly. Treat these notes as a study companion and verify anything decision-critical
against the [official documentation](https://docs.github.com/en/copilot).

## 🐞 Spotted a Mistake?

GitHub Copilot ships changes weekly and renames features often, so if something here is wrong or out of date, please
[report an issue](https://github.com/marcogrimaldi29/gh-600-study-notes/issues).

## ⚠️ Disclaimer

These notes are an independent study aid for **learning purposes only**. They are not affiliated with or endorsed by
GitHub or Microsoft. Always verify against the
[official GH-600 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600)
and the [GitHub Copilot documentation](https://docs.github.com/en/copilot) before relying on any detail here.

## 💚 Support

If these notes helped you prepare for GH-600, there are a few ways to show it: ⭐ star this repo on GitHub so other
candidates can find it, 🤝 connect with me on LinkedIn, or ☕ support the work behind them with a coffee.

<p>
  <a href="https://github.com/marcogrimaldi29/gh-600-study-notes"><img src="https://img.shields.io/badge/Star_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Star on GitHub" /></a>
  <a href="https://www.linkedin.com/in/marco-grimaldi29/"><img src="https://img.shields.io/badge/Connect_on_LinkedIn-0A66C2?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2EyLjA2MiAyLjA2MiAwIDAgMS0yLjA2My0yLjA2NSAyLjA2NCAyLjA2NCAwIDEgMSAyLjA2MyAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyNSAweiIvPjwvc3ZnPg%3D%3D" alt="Connect on LinkedIn" /></a>
  <a href="https://buymeacoffee.com/marcogrimaldi29"><img src="https://img.shields.io/badge/Support_with_a_coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Support with a coffee" /></a>
</p>

Maintained by **Marco Grimaldi**, Cloud Solution Architect. Find more study notes and certification reviews at
**[marcogrimaldi29.com](https://marcogrimaldi29.com/)**, or reach out through my
**[contact page](https://marcogrimaldi29.com/contact/)**.
