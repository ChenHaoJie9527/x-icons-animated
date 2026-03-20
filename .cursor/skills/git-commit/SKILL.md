---
name: git-commit
description: >-
  Validates and drafts git commit messages per Conventional Commits (type,
  optional scope, imperative subject, body/footer, breaking changes). Default
  language for subject/body: Simplified Chinese. Use before running `git commit`,
  when composing commit messages, or when the user asks for commit message help.
---

# Git Commit (Conventional Commits)

## When to apply

Read and follow this skill **before** running `git commit` or when proposing a commit message. Do not use non-conventional subjects without the user explicitly overriding.

## Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

- **Scope** is optional; use it to name the area (e.g. `api`, `ui`, `auth`, `db`).

## Types

| Type       | Purpose                                                 |
| ---------- | ------------------------------------------------------- |
| `feat`     | New feature                                             |
| `fix`      | Bug fix                                                 |
| `docs`     | Documentation only                                      |
| `style`    | Code style (formatting, no logic change)                |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf`     | Performance improvement                                 |
| `test`     | Adding or correcting tests                              |
| `build`    | Build system or external dependencies                   |
| `ci`       | CI configuration                                        |
| `chore`    | Maintenance tasks                                       |
| `revert`   | Reverts a previous commit                               |

## Rules

1. **Imperative mood** in the description ("add feature", not "added feature"). In Chinese, prefer concise verb-led phrasing（如「添加」「修复」，避免「添加了」「已经修复」）.
2. **No period** at the end of the subject line.
3. **Subject ≤ 72 characters** (description portion).
4. **Blank line** between subject and body.
5. **Body** explains **what** and **why**, not implementation detail ("how") unless necessary for reviewers.
6. **Language**: write the **subject and body in Simplified Chinese（简体中文）** by default. Keep `type` and optional `scope` in English as usual. Use another language only when the user explicitly asks.

## Breaking changes

Either add `!` after the type or scope, or put **`BREAKING CHANGE:`** in the footer:

```
feat(api)!: remove deprecated endpoints

BREAKING CHANGE: The /v1/users endpoint has been removed.
```

## Quick checklist

- [ ] Correct `type` and optional `(scope)`
- [ ] Subject is imperative, no trailing period, ≤ 72 chars
- [ ] Subject/body in **Simplified Chinese** unless user overrides
- [ ] Body separated by blank line if present
- [ ] Breaking change marked with `!` or `BREAKING CHANGE:` footer
