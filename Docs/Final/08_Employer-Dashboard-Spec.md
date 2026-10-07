# Employer Dashboard Specification — Phase 1 (Model 3)
**Version**: 1.0  
**Date**: May 2026  
**Status**: LOCKED  
**Owner**: Dalton (CTO)

> This document specifies the Phase 1 employer-lite dashboard at `dashboard.zimasahealth.com`. This is a **separate authenticated application** — it is not part of the marketing site. The marketing site captures the employer sign-up at `/get-started/` and routes to this dashboard. Build scope is defined here.

---

## 1. Overview

### What It Is

The employer-lite dashboard is a lightweight, read-only view that gives HR teams who self-sign-up via Zimasa Go a basic visibility window into their organisation's engagement on the platform.

It is the minimum viable employer experience for **Model 3** (true employer-lite with authenticated access) — distinct from the marketing site, which is public-facing and static.

### What It Is Not

- Not the full Zimasa employer programme dashboard (that is a future build)
- Not a member-management tool (no HR can see individual employee health data)
- Not part of zimasahealth.com or the Next.js marketing site
- Not connected to payroll, HRIS, or any internal employer system in Phase 1

### Access URL

`https://dashboard.zimasahealth.com`

Marketing site routes here on successful employer sign-up from `/get-started/`.

---

## 2. Authentication

| Requirement | Decision |
|-------------|----------|
| Auth method | Magic link (passwordless email) — Phase 1 |
| Session length | 7 days (re-auth on new device) |
| Multi-user | One primary account per organisation in Phase 1. No team seats. |
| Password | Not required — magic link only |
| SSO / OAuth | Phase 2 — not in Phase 1 scope |

**Flow:**
1. Employer completes sign-up at `/get-started/`
2. Marketing site API route sends sign-up data to dashboard backend
3. Dashboard sends magic link email to the registered work email
4. Employer clicks link → authenticated session created → dashboard loads
5. Subsequent visits: re-send magic link from login page

---

## 3. Organisation Profile (Setup Step)

On first login, the employer completes a brief profile. This is the only data entry the employer does.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Organisation Display Name | Text | Yes | Pre-filled from sign-up |
| Logo | Image upload | No | PNG/JPG, max 2MB — used in dashboard header only |
| Primary Contact Name | Text | Yes | Person who signed up |
| Primary Contact Email | Email | Yes | Pre-filled from sign-up |
| Workforce Size | Select | Yes | Pre-filled from sign-up — editable here |
| Industry | Select | No | Healthcare, Financial Services, Retail, Manufacturing, Technology, Other |

Profile is editable from dashboard settings at any time.

---

## 4. Phase 1 Dashboard — Feature Scope

### 4.1 Summary Cards (Top Row)

Four metric cards, updated every Monday morning (weekly cadence).

| Card | Metric | Definition |
|------|--------|------------|
| Total Sign-Ups | `count` | Employees who joined Zimasa Go using the org invite link |
| Active This Week | `count` | Employees who logged at least 1 Active Day in the current 7-day window |
| Activation Rate | `%` | (Active This Week ÷ Total Sign-Ups) × 100 |
| Total Active Days | `count` | Cumulative verified Active Days across all org members since sign-up |

**Display note**: Show current week value + last week delta (e.g. "+12 from last week"). No historical graph in Phase 1 — numbers only.

### 4.2 Invite Link Panel

A prominent panel for the employer to share their organisation's invite link with employees.

| Element | Detail |
|---------|--------|
| Invite URL | `https://app.zimasahealth.com/join/[org-code]` — unique per organisation |
| Copy button | One-click copy to clipboard |
| Share options | WhatsApp (deep link), Email (mailto), Download QR code (PNG) |
| Link status | Active / Paused toggle — pausing stops new members from joining via that link |

**Note**: There is no limit on the number of employees who can join via the invite link in Phase 1.

### 4.3 Weekly Active Days Trend (Simple)

A basic 8-week sparkline or bar chart showing weekly Active Days totals for the organisation.

| Requirement | Detail |
|-------------|--------|
| X-axis | Week ending date (Mon–Sun) |
| Y-axis | Total Active Days (all org members) |
| Data range | Last 8 complete weeks |
| Chart type | Simple bar chart — no interactivity required in Phase 1 |

### 4.4 Zimasa Go vs Full Programme Comparison

A static information panel in the sidebar or bottom of dashboard. Not a feature — a conversion prompt.

**Content:**

> **You are on Zimasa Go (Free)**  
> Your team is tracking Active Days. Here is what the full programme adds:
> - Four health tracks with verified provider access
> - Private company challenges and leagues
> - Allowances for employee wellness spending
> - Weekly reports with HR export
> - Dedicated programme manager
>
> [Book a Demo to Upgrade]

**CTA**: Redirects to `https://www.zimasahealth.com/book-demo/?utm_source=dashboard&utm_medium=referral&utm_campaign=upgrade-cta`

---

## 5. What Is Explicitly Out of Scope (Phase 1)

| Feature | Phase |
|---------|-------|
| Individual employee data or profiles | Never — PHI-avoidant |
| HRIS / payroll integration | Phase 2 |
| Allowance management and wallet | Phase 2 |
| Custom challenges and private leagues | Phase 2 |
| Multi-seat HR admin access | Phase 2 |
| Advanced reporting and CSV export | Phase 2 |
| Provider access for employees (marketplace) | Phase 2 |
| Billing and subscription management | Phase 2 |
| SSO / OAuth | Phase 2 |
| Mobile app for employers | Phase 2 |

---

## 6. Data Model — Marketing Site → Dashboard Handoff

When the employer completes the sign-up form at `/get-started/` (employer path), the marketing site API route at `/api/get-started` sends the following payload to the dashboard backend:

```ts
// POST to dashboard.zimasahealth.com/api/onboard
// (or via shared Resend email + manual dashboard provisioning in Phase 1)
{
  orgName: string,       // From employer sign-up form
  email: string,         // Primary contact email — used for magic link auth
  workforceSize: string, // From sign-up form select value
  utmSource?: string,    // From URL param
  utmMedium?: string,
  utmCampaign?: string,
  signupAt: string,      // ISO 8601 timestamp
}
```

**Phase 1 provisioning approach**: Given the expected low volume of employer sign-ups in Phase 1, the dashboard can be provisioned manually by Dalton. The marketing site sends an email to `growth@zimasahealth.com` with the above data, Dalton creates the org account in the dashboard admin, and the magic link is sent manually or by the dashboard's welcome flow.

**Phase 2**: Automated API handoff between marketing site and dashboard backend.

---

## 7. Org Code — Invite Link Generation

Each organisation gets a unique, human-readable org code on provisioning:

**Format**: `[org-slug]-[4-digit-random]`  
**Example**: `acme-health-4821`  
**Invite URL**: `https://app.zimasahealth.com/join/acme-health-4821`

Org code is generated at provisioning and never changes. If the employer pauses their link, a new invite URL is generated with a new code.

---

## 8. Privacy & Data Rules

| Rule | Requirement |
|------|-------------|
| No individual employee data | Dashboard only shows aggregate counts and rates — never individual names, emails, health data, or activity breakdowns |
| No PHI | No clinical data, diagnoses, prescriptions, or health records are collected or displayed |
| KDPA compliance | Dashboard terms of service must reference Zimasa Privacy Centre. No personal health information stored. |
| Data retention | Aggregate stats retained for 24 months. Sign-up records retained per KDPA requirements. |
| Employee visibility | Employees are not informed by the dashboard that their employer has a Zimasa Go account — engagement is voluntary and individual. |

---

## 9. Notifications (Phase 1 — Email Only)

| Trigger | Recipient | Content |
|---------|-----------|---------|
| Successful sign-up | Employer (primary email) | Welcome email with invite link and dashboard URL |
| Weekly summary | Employer (primary email) | Monday morning: Active Days this week, new sign-ups, activation rate delta |
| First employee joins | Employer | Notification that first team member has joined via their invite link |

No in-app notification centre in Phase 1. Email only.

---

## 10. Technical Stack

This document does not prescribe the dashboard stack — that is Dalton's decision. The requirements above define behaviour, not implementation.

Constraints to honour:
- Must run at `dashboard.zimasahealth.com` (subdomain, not subdirectory)
- Must not share a codebase with the marketing site (separate deployment)
- Must not expose individual member health data via any API or UI surface
- Magic link auth must send to the email registered at sign-up

---

## 11. Go-Live Criteria (Phase 1)

The dashboard must be live and testable before the marketing site go-live date (30 June 2026), because the Get Started employer path routes directly to it.

- [ ] Dashboard accessible at `dashboard.zimasahealth.com`
- [ ] Employer sign-up flow tested end-to-end: form → email → magic link → dashboard
- [ ] Invite link generated and functional — employee can join via link
- [ ] Summary cards populate with test data
- [ ] Weekly email notification fires correctly
- [ ] Upgrade CTA routes to `/book-demo/` with correct UTM params
- [ ] No individual employee data visible at any point
- [ ] KDPA privacy disclosure present on dashboard login and settings
