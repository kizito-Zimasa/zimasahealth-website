# Book Demo Page Content
**URL**: `/book-demo/`  
**File**: `content/pages/book-demo.mdx`  
**Priority**: P0  
**Audience**: All buyers — primary conversion page

---

## Metadata

```yaml
title: "Book a Demo — See ZHEP in Action | Zimasa"
description: "Book a 30-minute demo of the Zimasa Health Engagement OS. We'll show you the platform, a sample 90-day programme design, and your first activation forecast."
ogImage: "/images/og-book-demo.jpg"
```

---

## Page Layout

Split layout on desktop: form on the left (60%), value proof on the right (40%).  
Stacked on mobile: value proof first, then form.

**No navigation-style hero** — lead directly with the offer and form.

---

## Left Column — Form

**Headline**: Book Your 30-Minute Demo

**Subtext**: Tell us about your organisation. We'll show you the platform, a sample programme design, and your first activation forecast.

### Form Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Full Name | Text | Yes | Placeholder: "Your name" |
| Work Email | Email | Yes | Placeholder: "you@company.com" |
| Company / Organisation | Text | Yes | Placeholder: "Organisation name" |
| Phone Number | Tel | Yes | Placeholder: "+254 7XX XXX XXX" |
| Your Role | Select | No | Options: CMO / CRO / Risk Manager, HR Director / Benefits Manager, CEO / CFO, Practice Owner / Clinic Lead, Other |
| Solution Interest | Select | No | Options: ZHEP (Member Engagement Platform), Payers Solution, Healthcare Provider Network, Not sure yet |
| Timeline | Select | No | Options: Within 1 month, 1–3 months, 3–6 months, Exploring options |

**Submit Button**: Book My Demo (btn-primary — Orange)

**Privacy note**: "We'll never share your details. By submitting you agree to our [Privacy Policy](/privacy-centre/)."

**Success state** (shown in-place, no redirect):

> **You're booked.**  
> Thank you, [Name]. A member of the Zimasa team will be in touch within 1 business day to confirm your demo time.  
> In the meantime, you can [read about ZHEP →](/solutions/zhep/) or [explore the Payers Solution →](/insurers-tpas/).

**GA4 event on success**: `form_submit` with `form_id: 'book_demo'`

---

## Right Column — Value Proof

**Headline**: What Happens in the Demo

**3 steps**:

**1. Platform Walkthrough** (10 min)  
We show you ZHEP live — the four health tracks, the engagement engines, the member experience, and the reporting suite.

**2. Programme Design** (10 min)  
We design a sample 90-day programme for your buyer type — showing how we'd structure activation, track mix, and reporting for your specific context.

**3. Your Activation Forecast** (10 min)  
Based on your member population size and goals, we show you what 90-day activation typically looks like — and what an engaged cohort looks like at Day 90.

---

**Social proof block** (3 bullet points):

- **Target:** 50–70% activation rate in 90-day programmes
- **Target:** 8–12 Active Days per member per month for engaged members
- **Approach:** PHI-avoidant — no protected health data collected

---

**Trust badges**:
- Kenya Data Protection Act 2019 compliant
- PHI-avoidant architecture
- Verified engagement data only

---

## Form Destination

`POST /api/book-demo`

**Email to**: `sales@zimasahealth.com`  
**Subject**: `Demo Request — [Company]`

**UTM fields**: Capture `utm_source`, `utm_medium`, `utm_campaign` from URL params and include in email body. Do not show to user.
