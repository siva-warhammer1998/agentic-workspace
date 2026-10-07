# Siva Varman Portfolio

**Status: Phase 1 complete**

## Project overview

This repository contains Siva Varman’s personal portfolio and writing hub. Phase 1 established a polished, public professional profile through an agentic development workflow.

The project is intentionally both a portfolio and a controlled learning project. It provides a practical setting for defining agent roles, applying reusable skills, reviewing changes, and keeping human approval in the delivery loop.

## What the site contains

The site is a static, one-page professional profile with public-safe content. It contains:

- Experience records in reverse chronological order.
- Certifications.
- Links to selected Medium articles.
- Capabilities across cloud networking, automation, platforms, reliability, security, and identity.
- An About section and LinkedIn as the only direct contact method.

It does not expose confidential employer, client, system, or architectural information.

## Why this project exists

The main goal of this project was to learn agentic development through Claude Code/Codex-style workflows. The website provides a real but bounded product surface for practicing how agents plan, implement, review, and refine work under explicit constraints.

The portfolio matters as a professional profile. The workflow matters as a learning exercise: changes should be scoped, reviewable, reversible, and grounded in accurate public content.

## Agentic development workflow

The documented workflow is:

> Product Architect → Frontend Builder → Code Reviewer → User Approval → Content Editor → Learning Log

Each stage has a defined responsibility, boundary, and handoff.

| Role | Responsibility | Must not do | Expected handoff |
| --- | --- | --- | --- |
| Product Architect | Turns the user goal into a small, executable plan and makes scoped technical decisions. | Implement production code or expand scope without approval. | An approved plan with decisions, implementation steps, and affected files. |
| Frontend Builder | Implements approved UI work according to the plan and the frontend standards. | Create a new plan, review its own work, or deviate from approved scope. | Focused implementation details and verification steps for review. |
| Code Reviewer | Reads the implementation, checks it against the plan and standards, and reports specific findings. | Edit files unless explicitly asked, implement UI, or create the implementation plan. | A pass/fail review or actionable findings for correction. |
| User Approval | Confirms the plan, accepts tradeoffs, and authorizes implementation or fixes. | Be bypassed at a required approval point. | Approved scope, revision direction, or acceptance. |
| Content Editor | Improves portfolio or writing copy for clarity, accuracy, tone, and audience. | Change code, UI structure, or implementation plans. | A documented content update for the learning record. |
| Learning Log | Captures decisions, outcomes, and practical lessons from the workflow. | Replace current project instructions or present historical notes as current architecture. | An updated learning record maintained by the user. |

## Skills

Agents define ownership: who is responsible for a stage of work. Skills define reusable standards: how work in a particular area should be approached and checked.

| Skill | Role in this project |
| --- | --- |
| `frontend-aesthetics` | Guides a mature technical/editorial visual direction, cohesive visual decisions, and purposeful motion without sacrificing usability. |
| `accessibility-responsive` | Sets expectations for semantic HTML, keyboard access, visible focus, contrast, responsive behavior, touch targets, and reduced motion. |
| `frontend-verification` | Defines checks for plan alignment, browser behavior, interactions, responsive layouts, accessibility, content display, and theme support. |
| `portfolio-content` | Keeps portfolio copy clear, professional, scannable, accurate, and appropriate for technical recruiters and peers. |
| `scope-control` | Keeps work tied to a specific goal, distinguishes current scope from deferred work, and prevents feature creep. |

The role definitions live in [`.claude/agents/`](.claude/agents/). The reusable standards live in [`.claude/skills/`](.claude/skills/).

## Delivery process

This project uses a deliberate delivery loop:

1. Define the user goal and its boundaries.
2. Create a focused implementation plan.
3. Review the plan and obtain approval.
4. Implement focused, reviewable changes.
5. Run a code review against the approved plan and project standards.
6. Fix accepted findings.
7. Verify the production build, accessibility, links, responsiveness, and reduced-motion behavior.
8. Update the learning log with decisions and lessons.
9. Prepare the approved result for deployment.

A passing build is one check in this process. It does not replace visual review, keyboard testing, link checks, content review, or responsive testing.

## Key lessons from Phase 1

- Clear prompts and explicit constraints improve the quality and relevance of agent output.
- Agents need defined ownership so planning, implementation, review, and content work do not blur together.
- Skills provide reusable standards that make decisions and reviews more consistent.
- Build success does not prove product quality; accessibility, links, content, layout, and browser behavior still need review.
- Portfolio content must remain public-safe, accurate, and free of invented claims.
- Visual design requires concrete direction and deliberate review; a functional page is not automatically a polished page.
- Scope control prevents feature creep and keeps each iteration useful and reviewable.
- Human approval remains essential for priorities, tradeoffs, factual accuracy, and final acceptance.

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

The application source remains intentionally contained under `apps/web/`; this README does not duplicate every frontend file or component. The phase record is maintained in [docs/learning-log.md](docs/learning-log.md).

## Local development

Use Node.js and npm from a WSL/Linux environment. Run application commands from `apps/web`:

```bash
cd apps/web
npm install
npm run dev
npm run build
npm run serve
```

Using a Windows npm executable against a WSL UNC path can fail because Windows command tooling does not support that working-directory form. Use a WSL terminal with Linux Node.js and npm instead.

## Quality standards

Before release, verify that:

- The production build succeeds.
- Internal assets and links are not broken.
- Keyboard navigation and visible focus states work.
- Text and controls have accessible contrast.
- The page works on mobile widths and at browser zoom.
- `prefers-reduced-motion` behavior is respected.
- Content remains public-safe and accurate.
- No placeholder links or fabricated claims remain.

## Current scope and future direction

Phase 1 is complete. The current site is a static professional profile and writing hub.

It does not include a backend, CMS, comments, user accounts, or community posting. A future writing or community feature would require separate planning for authentication, moderation, spam prevention, content storage, privacy, and security before implementation begins.

## Contributing and working with agents

Future changes should follow the same loop: **plan → approval → implementation → review**. Keep changes focused, preserve public-safe content, and document lessons that affect future work.

Before making changes, read [CLAUDE.md](CLAUDE.md) and [AGENTS.md](AGENTS.md). Then consult the applicable agent role and skill definitions in [`.claude/`](.claude/).
