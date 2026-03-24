# Project TODO

## Purpose

This document captures the current improvement opportunities identified during the initial codebase analysis. Items are ordered by priority so the repository can first remove engineering blockers, then improve internal consistency, and finally improve product and publishing quality.

## P0

### 1. Fix incorrect root workspace scripts

- Update root Turbo filters that reference non-existent package names.
- `test:motion-kit` currently uses `--filter=motion-kit`, but the actual package name is `@x-icons/motion-kit`.
- Review all root scripts to ensure every `--filter` matches real workspace package names.

Why this matters:
Broken root scripts undermine the monorepo entry points and make routine validation unreliable.

## 2. Rewrite the root README

- Replace the default Turborepo starter README with project-specific documentation.
- Document the actual repository structure:
  - `apps/web`
  - `packages/motion-kit`
  - `packages/timeline-kit`
  - shared config packages
- Add real setup, development, testing, and build commands.
- Explain what the project is trying to be.

Why this matters:
The current README misrepresents the repository and creates onboarding friction for contributors and future users.

## P1

### 3. Define the primary product direction

- Decide whether the repository is primarily:
  - an animated icon showcase site
  - a reusable animation toolkit repo
  - both, with a clear relationship between them
- Reflect that decision in documentation, naming, and package boundaries.

Why this matters:
The current repo contains both a product surface and internal libraries. Without an explicit direction, APIs and UI will keep evolving in parallel without a clear center.

### 4. Consolidate duplicate animation abstractions

- Review overlap between:
  - `apps/web/app/hooks/use-icon-hover-animation.ts`
  - `packages/motion-kit/src/use-icon-motion-kit.ts`
- Decide whether Web should fully consume `motion-kit`.
- Remove or reduce duplicate animation control logic.

Why this matters:
Duplicate abstractions increase maintenance cost and make it unclear which API should be treated as canonical.

### 5. Improve icon registry maintenance

- Reduce manual maintenance burden in `apps/web/app/lib/icon-registry.ts`.
- Strengthen the sync workflow so icon additions stay deterministic and low-friction.
- Consider making generated vs handwritten boundaries more explicit.

Why this matters:
A large static registry is manageable at small scale but becomes a maintenance bottleneck as icon volume grows.

## P2

### 6. Improve copy-to-use developer experience in the web app

- The current interaction copies only the icon name.
- Add support for copying more useful outputs, such as:
  - component name
  - import statement
  - usage snippet
- Consider exposing source package metadata in the UI.

Why this matters:
A showcase becomes much more useful when it helps users immediately consume the icon in code.

### 7. Finish header navigation and link behavior

- Connect placeholder UI elements, such as the GitHub button, to real destinations.
- Verify semantic and accessibility behavior for navigation controls and external links.

Why this matters:
The current header looks production-oriented, but some controls still behave like placeholders.

### 8. Complete verification coverage for `timeline-kit`

- Run and maintain both unit tests and end-to-end validation for `timeline-kit`.
- Ensure the package is validated as a reusable library, not only type-checked.

Why this matters:
`timeline-kit` is the most library-like part of the repo and should have stronger release confidence.

### 9. Normalize documentation and comment language

- Decide on a primary language for public-facing docs and internal comments.
- Keep naming, README content, and architecture docs consistent.

Why this matters:
Mixed-language documentation is workable internally but creates friction if the repo is meant for broader collaboration or publication.

### 10. Audit monorepo command ergonomics

- Review naming consistency across root scripts.
- Ensure common workflows are easy to discover and execute from the repo root.
- Confirm that testing, type checking, icon syncing, and package-specific dev commands follow a clear convention.

Why this matters:
The root package is the main entry point for contributors. Clean task ergonomics reduce avoidable confusion.

## Suggested execution order

1. Fix root scripts.
2. Rewrite the root README.
3. Clarify product direction.
4. Consolidate animation abstractions.
5. Improve icon registry maintenance.
6. Upgrade the web app developer experience.
7. Expand verification and polish docs.
