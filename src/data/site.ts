/**
 * Single source of truth for the site's identity and page registry.
 *
 * Everything that needs to know "which pages exist and in what order" reads
 * from here: the foldable sidebar, the footer, the prev/next pager, the search
 * index seed and src/pages/sitemap.xml.ts. Site-wide strings — the name, the
 * exam, the skills-measured revision, the repository, the official links —
 * live here too, so no component has them typed in by hand.
 *
 * Adding a page is one entry in PAGES plus one file in src/pages/.
 */

const EXAM = 'GH-600';
const REPO_NAME = 'gh-600-study-notes';
const OWNER = 'marcogrimaldi29';

export const SITE = {
  /** The wordmark. Shown in full at every width — never abbreviated. */
  name: `${EXAM} Study Notes`,
  exam: EXAM,
  examTitle: 'Developing in Agentic AI Systems',
  certification: 'GitHub Certified: Agentic AI Developer',
  course: 'GH-600T00-A',
  /** The skills-measured revision these notes are written against. */
  skillsMeasured: 'May 4, 2026',
  origin: 'https://marcogrimaldi29.com',
  /** Also the base path the site is served under (see astro.config.mjs). */
  repoName: REPO_NAME,
  repo: `https://github.com/${OWNER}/${REPO_NAME}`,
  issues: `https://github.com/${OWNER}/${REPO_NAME}/issues`,
  /** Prefix for localStorage keys and custom DOM events. */
  storagePrefix: 'gh600',
  /** Labels in the home page hero. */
  heroLabels: [
    { text: 'Intermediate Level', color: 'blue' },
    { text: 'GitHub Copilot', color: 'green' },
    { text: 'Agentic AI', color: 'purple' },
    { text: 'Agents · MCP · Guardrails', color: 'orange' },
  ],
  /** Tokens for the faint "code rain" background, drawn from the exam's own vocabulary. */
  codeRain: [
    'copilot', 'agent', 'mcp', 'hooks', 'git push', 'PR', 'plan', 'act', 'evaluate', '/fleet', '/delegate',
    'preToolUse', 'tools:', 'SKILL.md', 'AGENTS.md', '.agent.md', 'rulesets', 'CODEOWNERS', 'needs:',
    'concurrency', 'permissions:', 'environment', 'safe-outputs', 'firewall', '{', '}', '=>', '[]', '&&',
    '#', '##', '---', 'yaml', 'json', 'gh aw', 'copilot -p', '--allow-tool', 'workflow_run', 'main',
  ],
  author: {
    name: 'Marco Grimaldi',
    role: 'Cloud Solution Architect',
    site: 'https://marcogrimaldi29.com/',
    github: `https://github.com/${OWNER}`,
    linkedin: 'https://www.linkedin.com/in/marco-grimaldi29/',
    coffee: 'https://buymeacoffee.com/marcogrimaldi29',
  },
  /** Official material, listed in the footer and linked from the home page. */
  resources: [
    { label: 'GH-600 study guide', href: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600' },
    { label: 'Certification page', href: 'https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-developer/' },
    { label: 'Course GH-600T00-A', href: 'https://learn.microsoft.com/en-us/training/courses/gh-600t00' },
    { label: 'GitHub Copilot docs', href: 'https://docs.github.com/en/copilot' },
    { label: 'Copilot cloud agent', href: 'https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent' },
    { label: 'GitHub Agentic Workflows', href: 'https://github.github.com/gh-aw/' },
    { label: 'Exam sandbox', href: 'https://ghcertdemo.starttest.com/' },
  ],
} as const;

export type PageGroup = 'start' | 'skills' | 'extras';

export interface NotePage {
  /** URL segment; '' is the home page. */
  slug: string;
  /** Full label, used in the footer, the pager and search results. */
  label: string;
  /**
   * Condensed label for the sidebar. Carries neither the skill number nor the
   * weighting: the Counter beside it already shows the weighting, so repeating
   * either in the name reads as a duplicate.
   */
  navLabel: string;
  /** Octicon shown beside the label in the rail, alone in the folded rail, and on cards. */
  icon: string;
  /** Skill number in the official outline, for the skill pages only. */
  skill?: number;
  /** Eyebrow shown on cards and page headers. */
  badge: string;
  /** CSS custom property holding this page's accent colour. */
  accent: string;
  /** Card / meta description. */
  blurb: string;
  group: PageGroup;
  /** Exam weighting, for the skill pages only. */
  weight?: string;
  /** Mid-point of the weighting range, used to size the progress bars. */
  weightPct?: number;
}

export const PAGES: NotePage[] = [
  {
    slug: '',
    label: 'Home',
    navLabel: 'Home',
    icon: 'home',
    badge: 'Overview',
    accent: 'var(--s0)',
    blurb: 'Exam overview, skills weighting and how to use these notes.',
    group: 'start',
  },
  {
    slug: 'agentic-foundations',
    label: 'Agentic Foundations',
    navLabel: 'Foundations',
    icon: 'book',
    badge: 'Foundations · Prerequisite',
    accent: 'var(--s0)',
    blurb:
      'The mental model the exam hangs off: assistant versus agent, plan → act → evaluate, GitHub as system of record and control plane, the contributor model, every Copilot agent surface and the renames you will meet.',
    group: 'start',
  },
  {
    slug: 'skill-1-architecture-sdlc',
    label: 'Prepare agent architecture and SDLC processes',
    navLabel: 'Architecture & SDLC',
    icon: 'workflow',
    skill: 1,
    badge: 'Skill 1 · 15–20%',
    accent: 'var(--s1)',
    blurb:
      'Mapping agents to SDLC stages, task contracts, anti-patterns, separating planning from execution, structured and validated plans, PR governance, and dialling autonomy with human intervention that does not slow delivery.',
    group: 'skills',
    weight: '15–20%',
    weightPct: 17.5,
  },
  {
    slug: 'skill-2-tools-environments',
    label: 'Implement tool use and environment interaction',
    navLabel: 'Tools & MCP',
    icon: 'tools',
    skill: 2,
    badge: 'Skill 2 · 20–25%',
    accent: 'var(--s2)',
    blurb:
      'The heaviest domain: tool selection and permissions, MCP servers, the GitHub remote MCP server, registries and allowlists, execution context, CI invocation, branch scope, and safe execution with retries, rollback and escalation.',
    group: 'skills',
    weight: '20–25%',
    weightPct: 22.5,
  },
  {
    slug: 'skill-3-memory-state',
    label: 'Manage memory, state, and execution',
    navLabel: 'Memory & State',
    icon: 'database',
    skill: 3,
    badge: 'Skill 3 · 10–15%',
    accent: 'var(--s3)',
    blurb:
      'Short-term, long-term and external memory, Copilot Memory, sources of truth, expiration and pruning, durable state in issues and pull requests, resuming work, and detecting drift, conflicting and stale context.',
    group: 'skills',
    weight: '10–15%',
    weightPct: 12.5,
  },
  {
    slug: 'skill-4-evaluation-tuning',
    label: 'Perform evaluation, error analysis, and tuning',
    navLabel: 'Evaluation & Tuning',
    icon: 'checklist',
    skill: 4,
    badge: 'Skill 4 · 15–20%',
    accent: 'var(--s4)',
    blurb:
      'Success criteria and evaluation signals, required checks and scanning as quality gates, reading session logs and traces, classifying root causes, and tuning instructions, memory and tool access.',
    group: 'skills',
    weight: '15–20%',
    weightPct: 17.5,
  },
  {
    slug: 'skill-5-multi-agent',
    label: 'Orchestrate multi-agent coordination',
    navLabel: 'Multi-Agent',
    icon: 'people',
    skill: 5,
    badge: 'Skill 5 · 15–20%',
    accent: 'var(--s5)',
    blurb:
      'Orchestration patterns, subagents and fleet mode, isolation with branches, permissions and concurrency, conflict arbitration, evidence and handoffs, failure recovery, and adding, replacing or retiring agents safely.',
    group: 'skills',
    weight: '15–20%',
    weightPct: 17.5,
  },
  {
    slug: 'skill-6-guardrails',
    label: 'Implement guardrails and accountability',
    navLabel: 'Guardrails',
    icon: 'shield-check',
    skill: 6,
    badge: 'Skill 6 · 10–15%',
    accent: 'var(--s6)',
    blurb:
      'Risk classification and autonomy levels, rulesets, CODEOWNERS and environments, human-in-the-loop at the right decision points, least privilege, hooks that block, and approvals that actually reduce risk.',
    group: 'skills',
    weight: '10–15%',
    weightPct: 12.5,
  },
  {
    slug: 'config-reference',
    label: 'Configuration reference',
    navLabel: 'Config Files',
    icon: 'file-code',
    badge: 'Deep dive · Files & flags',
    accent: 'var(--s7)',
    blurb:
      'Every file and flag the exam expects you to read: agent profiles, instructions, copilot-setup-steps.yml, MCP JSON, hooks, agentic workflow frontmatter, Copilot CLI permissions and the workflow YAML that gates it all.',
    group: 'extras',
  },
  {
    slug: 'exam-tips',
    label: 'Exam tips & caveats',
    navLabel: 'Exam Tips',
    icon: 'light-bulb',
    badge: 'Final review',
    accent: 'var(--s8)',
    blurb:
      'Key numbers and defaults, the renames that cost marks, Learn-versus-docs discrepancies, commonly confused pairs, a scenario-to-answer lookup table and a checklist for the night before.',
    group: 'extras',
  },
];

export const GROUP_LABELS: Record<PageGroup, string> = {
  start: 'Start here',
  skills: 'Skills measured',
  extras: 'Final review',
};

/** Pages that carry an exam weighting, in outline order. */
export const SKILL_PAGES = PAGES.filter((p) => p.group === 'skills');

export function pageBySlug(slug: string): NotePage | undefined {
  return PAGES.find((p) => p.slug === slug);
}

/** Previous / next page for the pager, skipping the home page. */
export function neighbours(slug: string) {
  const ordered = PAGES.filter((p) => p.slug !== '');
  const i = ordered.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? ordered[i - 1] : undefined, next: i >= 0 ? ordered[i + 1] : undefined };
}
