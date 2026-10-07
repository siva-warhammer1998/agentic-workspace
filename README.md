# Personal Portfolio

**Status: Phase 1 complete**

## Project overview

This repository contains my personal portfolio and writing hub. In Phase 1, I created a polished public professional profile through an agentic development workflow.

I use this project as both a portfolio and a controlled learning project. It gives me a practical way to define agent roles, apply reusable skills, review changes, and keep human approval in the delivery loop.

## What the site contains

My site is a static, one-page professional profile with public-safe content. It contains:

- My experience records in reverse chronological order.
- My certifications.
- Links to selected Medium articles.
- My capabilities across cloud networking, automation, platforms, reliability, security, and identity.
- An About section and LinkedIn as my only direct contact method.

I do not publish confidential employer, client, system, or architectural information.

## Why this project exists

My main goal was to learn agentic development through Claude Code/Codex-style workflows. The website gives me a real but bounded product surface for practicing how agents plan, implement, review, and refine work under explicit constraints.

The portfolio serves as my professional profile. The workflow serves as a learning exercise: I keep changes scoped, reviewable, reversible, and grounded in accurate public content.

## Agentic development workflow

I use the following workflow:

> Product Architect → Frontend Builder → Code Reviewer → User Approval → Content Editor → Learning Log

Each stage has a defined responsibility, boundary, and handoff.

| Role | Responsibility | Must not do | Expected handoff |
| --- | --- | --- | --- |
| Product Architect | Defines a small, executable plan for my goal and makes scoped technical decisions. | Implement production code or expand scope without my approval. | An approved plan with decisions, implementation steps, and affected files. |
| Frontend Builder | Implements approved UI work according to the plan and frontend standards. | Create a new plan, review its own work, or deviate from approved scope. | Focused implementation details and verification steps for review. |
| Code Reviewer | Reads the implementation, checks it against the plan and standards, and reports specific findings. | Edit files unless I explicitly ask, implement UI, or create the implementation plan. | A pass/fail review or actionable findings for correction. |
| User Approval | Lets me confirm the plan, accept tradeoffs, and authorize implementation or fixes. | Be bypassed at a required approval point. | Approved scope, revision direction, or acceptance. |
| Content Editor | Improves my portfolio or writing copy for clarity, accuracy, tone, and audience. | Change code, UI structure, or implementation plans. | A documented content update for my learning record. |
| Learning Log | Captures decisions, outcomes, and practical lessons from my workflow. | Replace current project instructions or present historical notes as current architecture. | An updated learning record that I maintain. |

## Skills

I use agents to define ownership: who is responsible for a stage of work. I use skills to define reusable standards: how work in a particular area should be approached and checked.

| Skill | Role in this project |
| --- | --- |
| `frontend-aesthetics` | Guides my mature technical/editorial visual direction, cohesive visual decisions, and purposeful motion without sacrificing usability. |
| `accessibility-responsive` | Sets my standards for semantic HTML, keyboard access, visible focus, contrast, responsive behavior, touch targets, and reduced motion. |
| `frontend-verification` | Defines the checks I use for plan alignment, browser behavior, interactions, responsive layouts, accessibility, content display, and theme support. |
| `portfolio-content` | Keeps my portfolio copy clear, professional, scannable, accurate, and appropriate for technical recruiters and peers. |
| `scope-control` | Keeps my work tied to a specific goal, distinguishes current scope from deferred work, and prevents feature creep. |

My role definitions live in [`.claude/agents/`](.claude/agents/). My reusable standards live in [`.claude/skills/`](.claude/skills/).

## Delivery process

I use a deliberate delivery loop:

1. I define the user goal and its boundaries.
2. I create a focused implementation plan.
3. I review the plan and obtain approval.
4. I implement focused, reviewable changes.
5. I run a code review against the approved plan and project standards.
6. I fix accepted findings.
7. I verify the production build, accessibility, links, responsiveness, and reduced-motion behavior.
8. I update the learning log with decisions and lessons.
9. I prepare the approved result for deployment.

A passing build is one check in my process. It does not replace visual review, keyboard testing, link checks, content review, or responsive testing.

## Key lessons from Phase 1

- Clear prompts and explicit constraints improve the quality and relevance of agent output.
- Agents need defined ownership so planning, implementation, review, and content work do not blur together.
- Skills provide reusable standards that make decisions and reviews more consistent.
- Build success does not prove product quality; accessibility, links, content, layout, and browser behavior still need review.
- Portfolio content must remain public-safe, accurate, and free of invented claims.
- Visual design requires concrete direction and deliberate review; a functional page is not automatically a polished page.
- Scope control prevents feature creep and keeps each iteration useful and reviewable.
- My approval remains essential for priorities, tradeoffs, factual accuracy, and final acceptance.

## Repository structure

```text
.
├── CLAUDE.md                 # Current project context and constraints
├── AGENTS.md                 # Agent workflow, boundaries, and handoffs
├── .claude/
│   ├── agents/               # Specialized agent role definitions
│   └── skills/               # Reusable standards for implementation and review
├── docs/
│   └── learning-log.md       # Phase decisions, outcomes, and lessons
└── apps/
    └── web/                  # Static portfolio application
```

I keep the application source contained under `apps/web/`; this README does not duplicate every frontend file or component. I maintain the phase record in [docs/learning-log.md](docs/learning-log.md).

## Local development

I use Node.js and npm from a WSL/Linux environment. I run application commands from `apps/web`:

```bash
cd apps/web
npm install
npm run dev
npm run build
npm run serve
```

Using a Windows npm executable against a WSL UNC path can fail because Windows command tooling does not support that working-directory form. I use a WSL terminal with Linux Node.js and npm instead.

## Quality standards

Before release, I verify that:

- The production build succeeds.
- Internal assets and links are not broken.
- Keyboard navigation and visible focus states work.
- Text and controls have accessible contrast.
- The page works on mobile widths and at browser zoom.
- `prefers-reduced-motion` behavior is respected.
- Content remains public-safe and accurate.
- No placeholder links or fabricated claims remain.

## Current scope and future direction

Phase 1 is complete. My current site is a static professional profile and writing hub.

I have not added a backend, CMS, comments, user accounts, or community posting. Before I build a future writing or community feature, I will plan for authentication, moderation, spam prevention, content storage, privacy, and security.

## Contributing and working with agents

I expect future changes to follow the same loop: **plan → approval → implementation → review**. I keep changes focused, preserve public-safe content, and document lessons that affect future work.

Before making changes, read [CLAUDE.md](CLAUDE.md) and [AGENTS.md](AGENTS.md). Then consult the applicable agent role and skill definitions in [`.claude/`](.claude/).
