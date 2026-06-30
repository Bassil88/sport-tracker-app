# BACKLOG.md

> Product backlog for the Sport Tracker project.

---

| Property     | Value         |
| ------------ | ------------- |
| Project      | Sport Tracker |
| Version      | 1.0.0         |
| Status       | Active        |
| Last Updated | 2026-06-30    |

---

# Purpose

The backlog contains all planned work for the project.

Each item represents a feature, improvement, bug fix, refactoring task, or technical debt.

Tasks move through the project lifecycle as development progresses.

---


## Current Sprint (Phase 2 – Cleanup & Refactoring)

### Sprint Goal

Reduce technical debt and improve the application's architecture without changing functionality.

### Current Phase

Cleanup & Refactoring

### In Progress

- Refactor ProgressHistory.js
- Create API service layer
- Remove mixed mock/API data

### Completed

- Documentation system established
- Project structure audit completed
- Technical audit completed
- ProgressHistory.js reviewed
- WorkoutScheme.js reviewed
- SignIn.js reviewed
- SignUp.js reviewed
- Home.js reviewed

### Next

- Refactor WorkoutScheme.js
- Implement loading states
- Implement error handling


# Task Status

* 🟦 Planned
* 🟨 In Progress
* ✅ Completed
* ⛔ Blocked
* ❌ Cancelled

---

# Priority Levels

* 🔴 High
* 🟠 Medium
* 🟢 Low

---

# Product Backlog

| ID   | Task                                               | Priority  | Milestone | Status          |
| ---- | -------------------------------------------------- | --------- | --------- | --------------  |
| B001 | Audit current project structure                    | 🔴 High   | M1        | ✅ Completed   |
| B002 | Identify technical debt                            | 🔴 High   | M1        | ✅ Completed   |
| B003 | Review folder organization                         | 🔴 High   | M1        | ✅ Completed   |
| B004 | Review authentication flow                         | 🔴 High   | M1        | ✅ Completed   |
| B005 | Review frontend architecture                       | 🔴 High   | M1        | ✅ Completed   |
| B006 | Review backend architecture                        | 🔴 High   | M1        | ✅ Completed   |
| B007 | Review chart implementation                        | 🟠 Medium | M1        | ✅ Completed   |
| B008 | Create technical debt report                       | 🔴 High   | M1        | ✅ Completed   |
| B009 | Verify WorkoutData.js usage                        | 🔴 High   | M1        | 🟦 Planned     |
| B010 | Verify unused assets                               | 🟠 Medium | M1        | 🟦 Planned     |
| B011 | Verify Chart.js / react-chartjs-2 dependency usage | 🔴 High   | M1        | 🟦 Planned     |
| B012 | Move API calls into a service layer                | 🔴 High   | M2        | 🟨 In Progress |
| B013 | Remove mixed mock/API data                         | 🔴 High   | M2        | 🟦 Planned     |
| B014 | Remove development console.log statements          | 🟠 Medium | M2        | 🟦 Planned     |
| B015 | Add loading state                                  | 🟠 Medium | M2        | 🟦 Planned     |
| B016 | Add user-friendly error state                      | 🟠 Medium | M2        | 🟦 Planned     |
| B017 | Separate chart data transformation from UI         | 🔴 High   | M2        | 🟦 Planned     |


---


# Blocked Tasks

None.

---

# Completed Tasks


- Documentation system established.
- PROJECT_CONTEXT.md completed.
- ROADMAP.md completed.
- BACKLOG.md completed.
- AI_CONTEXT.md completed.
- CHANGELOG.md created.
- AUDIT_REPORT.md completed.
- Initial project audit completed.
- React component review completed.

---

# Related Documents

* PROJECT_CONTEXT.md
* ROADMAP.md
* Phase1-Cleanup.md
* ISSUES.md 



## Sprint Progress

| Status | Count |
|--------|------:|
| ✅ Completed | 9 |
| 🟨 In Progress | 1 |
| 🟦 Planned | 9 |
| ⛔ Blocked | 0 |


## Phase Transition

Milestone M1 (Project Audit) has been completed successfully.

The backlog is now focused on Milestone M2 (Cleanup & Refactoring), where architectural improvements will be implemented without changing application behavior.