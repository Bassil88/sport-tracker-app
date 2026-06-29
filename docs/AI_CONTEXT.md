# AI_CONTEXT.md

> Master context file for AI assistants working on the Sport Tracker project.

---

| Property     | Value              |
| ------------ | ------------------ |
| Project      | Sport Tracker      |
| Version      | 1.0.0              |
| Status       | Active             |
| Purpose      | AI Working Context |
| Last Updated | 2026-06-29         |

---

# Project Summary

Sport Tracker is a modern full-stack fitness tracking application developed as a long-term portfolio project.

The application is intended to demonstrate professional software engineering practices, clean architecture, maintainable code, documentation, testing, and cloud deployment.

The project is under active development.

---

## Preferred AI Models

Gemini CLI

Primary:
- gemini-3.1-flash-lite

Secondary:
- gemini-3-flash-preview

Avoid:
- gemini-3.5-flash (quota issues on free tier)

Use ChatGPT for:
- Architecture
- Planning
- Documentation
- Complex reasoning

# Current Milestone

Milestone: M1

Name:

Project Audit

Current Goal:

Perform a complete technical assessment of the existing codebase before implementing new functionality.

---

# Current Phase

Phase 1

Project Audit & Cleanup

Current Focus

Project Structure Review

---

# Technology Stack

Frontend

* React
* Tailwind CSS

Backend

* ASP.NET Core Web API
* C#

Database

* PostgreSQL (Supabase planned)
* Entity Framework Core (planned)

Authentication

* JWT

Deployment

* Vercel (planned)
* Render or Azure (planned)

---

# Architecture

Frontend

↓

REST API

↓

Application Services

↓

Repositories

↓

Entity Framework Core

↓

PostgreSQL

---

# Development Rules

Always:

* Preserve existing functionality.
* Prefer incremental improvements.
* Explain architectural decisions.
* Keep changes small and focused.
* Follow SOLID principles.
* Use Dependency Injection.
* Keep controllers lightweight.
* Keep business logic inside services.
* Use DTOs.
* Prefer async/await.
* Keep React components reusable.

Never:

* Rewrite the entire project.
* Rename files without request.
* Introduce unnecessary dependencies.
* Mix unrelated refactoring into one task.
* Remove working functionality.

---

# AI Responsibilities

When working on this repository:

1. Analyze before changing code.
2. Explain proposed improvements.
3. Minimize code modifications.
4. Respect the current project phase.
5. Update documentation when architecture changes.
6. Suggest improvements separately from implementation.

---

# Current Documentation

Primary Documents

* PROJECT_CONTEXT.md
* ROADMAP.md
* BACKLOG.md
* AUDIT_REPORT.md
* Phase1-Cleanup.md

Read these before making architectural decisions.

---

# Active Backlog Item

Current Task

B001

Project Structure Audit

Do not work on unrelated features.

---

# Definition of Done

A task is complete only when:

* Code compiles successfully.
* Existing functionality remains intact.
* Documentation is updated.
* Changes are explained.
* No unnecessary files were modified.

---

# Prompt Behaviour

If requirements are unclear:

* Ask questions instead of assuming.

If implementation is risky:

* Explain risks first.

If architecture changes are required:

* Justify them before implementation.

If multiple approaches exist:

* Recommend the simplest maintainable solution.

---

# Output Expectations

Responses should include:

1. Analysis

2. Proposed Solution

3. Files Affected

4. Risks

5. Recommended Git Commit Message

Do not modify unrelated files.

---

# Session Context

This document should be considered the primary context for every AI session.

All recommendations must align with the current milestone, backlog, documentation, and project architecture.
