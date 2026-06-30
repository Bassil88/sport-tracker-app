# PROJECT_CONTEXT.md

> Single Source of Truth for the Sport Tracker project.

---

| Property | Value |
|----------|-------|
| Project | Sport Tracker |
| Repository | sport-tracker-app |
| Owner | Bassil Edelbi |
| Version | 1.0.0 |
| Status | Active |
| Created | 2026-06-29 |
| Last Updated | 2026-06-29 |

---


## Sport Tracker

## Purpose

This document is the single source of truth for the Sport Tracker project.

It defines the project's vision, goals, architecture, development standards, coding conventions, AI collaboration guidelines, and long-term roadmap.

All project documentation should remain consistent with this document.

This document serves as the primary reference for both human contributors and AI assistants working on the project.

## Project Overview

Sport Tracker is a modern full-stack fitness tracking application that enables users to record workouts, monitor progress, and visualize performance through interactive dashboards and charts.

The project is being developed primarily as a professional portfolio application to demonstrate modern software engineering practices rather than simply delivering a functional application.

Throughout development, emphasis is placed on clean architecture, maintainability, scalability, testing, documentation, and continuous improvement.

## Project Vision

The goal is to transform Sport Tracker into a production-quality application that demonstrates the skills expected from a modern Full Stack .NET Developer.

The project should showcase not only technical implementation but also software architecture, documentation quality, testing strategy, and professional development workflow.

Every new feature should improve the project while preserving maintainability and code quality.

## Project Goals

Primary goals:

- Build a clean and maintainable full-stack application.
- Apply modern software engineering practices.
- Demonstrate real-world architecture.
- Replace mock data with a real database.
- Build secure authentication.
- Visualize workout statistics using charts.
- Continuously refactor and improve the existing codebase.

Secondary goals:

- Improve React development skills.
- Improve ASP.NET Core Web API architecture.
- Learn PostgreSQL and cloud deployment.
- Build a project suitable for technical interviews.



## Project Principles

This project prioritizes:

1. Clean code over quick solutions.
2. Maintainability over shortcuts.
3. Learning over speed.
4. Documentation alongside implementation.
5. Small iterative improvements.
6. Production-ready architecture.
7. Professional Git history.


## Architecture
```text
React UI
    │
    ▼
ASP.NET Core Web API
    │
    ▼
Application Services
    │
    ▼
Repositories
    │
    ▼
Entity Framework Core
    │
    ▼
PostgreSQL (Supabase)
```



## Current Development Status

### Current Phase

- Documentation Foundation

### Current Milestone

- PROJECT_CONTEXT.md

### Next Milestone

- ROADMAP.md

The project is currently an early prototype and serves as the foundation for a production-quality portfolio application.

## Current Limitations

- Mock/local data
- No production database
- Authentication requires improvement
- Existing codebase requires refactoring

## Next Objective

Complete the project audit before implementing new functionality.


## Development Standards

### General Principles

- Follow SOLID principles whenever applicable.
- Prefer composition over inheritance.
- Keep components and services focused on a single responsibility.
- Avoid duplicated code.
- Favor readability over clever implementations.

### Backend

- Use Dependency Injection.
- Expose DTOs only.
- Keep controllers lightweight.
- Business logic belongs in Services.
- Database access belongs in Repositories.

### Frontend

- Keep components small and reusable.
- Prefer functional React components.
- Separate UI from business logic.
- Reuse hooks whenever possible.

### General

- Use meaningful names.
- Use PascalCase for components and C# classes.
- Use camelCase for variables.
- Use async/await for asynchronous operations.

## AI Collaboration Rules

Copilot and Gemini are assistants, not architects.

General Rules

- Never rewrite working code without request.
- Prefer incremental improvements.
- One task at a time.
- Explain every important change.
- Avoid introducing unnecessary libraries.
- Preserve existing architecture.
- Do not rename files unless requested.
- Prefer maintainability over complexity.

Every AI-generated change must be reviewed and understood before being committed.


## Definition of Done

A task is considered complete when:

- The feature works correctly.
- Code has been reviewed.
- Documentation has been updated.
- No new warnings or errors exist.
- The feature has been committed to Git.


## Documentation Rules

- Keep documentation synchronized with the implementation.
- Do not duplicate information across documents.
- Update affected documents whenever architecture changes.
- Every completed phase must update the corresponding phase document.


## Related Documentation

- ROADMAP.md
- BACKLOG.md
- ARCHITECTURE.md
- Phase1-Cleanup.md




## Technology Stack

### Frontend

- React
- Tailwind CSS

### Backend

- ASP.NET Core Web API

### Database

- PostgreSQL (Supabase)

### Authentication

- JWT

### Planned Deployment

- Vercel (Frontend)
- Render or Azure (Backend)
- Supabase (Database)
