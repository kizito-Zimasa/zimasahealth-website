# Get Started Page Content
**URL**: `/get-started/`  
**File**: `content/pages/get-started.mdx`  
**Priority**: P0  
**Audience**: Individual members (B2C) and Employers / HR leads (B2B self-serve)  
**Word Count**: ~600

---

## Metadata

```yaml
title: "Get Started Free — Zimasa Go for Members & Employers | Zimasa"
description: "Sign up for Zimasa Go — free for individual members. HR teams can register their organisation and get a free employer-lite dashboard. No credit card required."
ogImage: "/images/og-get-started.jpg"
```

---

## Page Design Notes

This page is conversion-optimised. Keep copy minimal. The page's only job is to get the visitor to choose a path and complete the form. No long sections, no prose body copy.

**Layout**: Two-column path selector above the fold (desktop). Stacked on mobile. The selected path expands the corresponding form inline — the other path card dims but remains visible.

**Pre-population**: If URL contains `?path=member` or `?path=employer`, auto-select the corresponding tab/path on load.

---

## Section 1 — Hero

**Headline**:
> Start Free. No Contract. No Credit Card.

**Subheadline**:
> Zimasa Go is free for members and employers. Choose your path below.

**Background**: `bg-hero-green` (short hero — 200px tall, not full-bleed)

---

## Section 2 — Path Selector

Two equal cards side by side. Clicking a card selects it (highlighted border) and scrolls to / expands the relevant form.

---

### Path Card 1 — Member

**Icon**: `user` (Lucide, 40px, green)

**Label**: I'm a Member

**Headline**: Track your health. Join the challenge.

**Body**:
Free steps tracking, squads, leaderboards, and share cards. Connect with your employer's programme or join public challenges independently.

**What you get**:
- Steps and activity tracking
- Squads (3–5 people)
- Public challenges and leaderboards
- Share cards

**CTA button**: Get Started — It's Free

---

### Path Card 2 — Employer

**Icon**: `building-2` (Lucide, 40px, navy)

**Label**: I'm an Employer

**Headline**: Give your team Zimasa Go. Free.

**Body**:
Request access to Zimasa Go (free tier available now) or full Zimasa programmes (coming Q4 2026). Register your organisation and share one link with your team. See aggregate Active Days on your free employer-lite dashboard.

**What you get**:
- Employer-lite dashboard (aggregate team data)
- Invite link for your workforce
- Everything your employees get in the member tier
- No IT integration, no procurement

**CTA button**: Sign Up My Organisation

---

## Section 3 — Forms

### Form A — Member Sign-Up

**Fields:**

| Field | Type | Required | Max Length | Placeholder |
|-------|------|----------|------------|-------------|
| Full Name | Text | Yes | 100 | Your name |
| Email Address | Email | Yes | 254 | Work or personal email |
| Employer Code | Text | No | 50 | Optional — if your employer shared one |
| `website` | Honeypot | — | — | Hidden — do not display |

**Hidden UTM fields**: `utmSource`, `utmMedium`, `utmCampaign` — populated from URL params by client JS.

**Submit button label**: Create My Free Account

**On success**: Client-side redirect to `https://app.zimasahealth.com/signup?email=[encoded email]`

**Validation messages**:
- Email required: "Please enter your email address"
- Email invalid: "Please enter a valid email address"
- Name required: "Please enter your name"

---

### Form B — Employer Sign-Up

**Fields:**

| Field | Type | Required | Max Length | Placeholder |
|-------|------|----------|------------|-------------|
| Organisation Name | Text | Yes | 200 | Your company name |
| Work Email | Email | Yes | 254 | Your work email |
| Workforce Size | Select | Yes | — | See options below |
| `website` | Honeypot | — | — | Hidden — do not display |

**Workforce Size options:**
- 1–25 employees
- 26–100 employees
- 101–500 employees
- 501+ employees

**Hidden UTM fields**: `utmSource`, `utmMedium`, `utmCampaign`

**Submit button label**: Set Up My Organisation

**On success**:
1. API route sends notification email to `growth@zimasahealth.com`
2. Client-side redirect to `https://dashboard.zimasahealth.com/setup`

**Validation messages**:
- Org name required: "Please enter your organisation name"
- Email required: "Please enter your work email"
- Workforce size required: "Please select your workforce size"

---

## Section 4 — Reassurance Strip

Short horizontal strip below the forms. Three trust signals in a row.

**Signal 1**  
Icon: `lock` (16px)  
Text: No credit card required

**Signal 2**  
Icon: `shield-check` (16px)  
Text: No PHI collected — ever

**Signal 3**  
Icon: `zap` (16px)  
Text: Active in under 5 minutes

---

## Section 5 — Already a Member?

**Small text block**, centred, below the reassurance strip:

> Already in a company programme? Sign in at [app.zimasahealth.com](https://app.zimasahealth.com)  
> Questions? [Contact us](/contact-us/)

---

## Section 6 — What Happens Next (Employer Path Only)

*This section renders only when the Employer path is active / selected.*

**Headline**: What happens after you sign up

**3-step list** (compact, no icons needed):

1. **You receive a confirmation email** with your organisation's invite link. Share it with your team on WhatsApp, Slack, or email.
2. **Employees sign up** using the invite link and start tracking Active Days in the Zimasa Go app immediately.
3. **Your dashboard goes live** within 24 hours. You will see aggregate sign-ups, activation rate, and Active Days — updated every Monday morning.

**Note**: The employer-lite dashboard is at [dashboard.zimasahealth.com](https://dashboard.zimasahealth.com) — a separate authenticated app. The marketing site routes you there after sign-up.

---

## Notes for Build

- Page must default to no path selected — do not pre-select a path unless `?path=` is in the URL.
- Both forms live on the same page. Do not build separate pages for member vs employer paths.
- The honeypot `website` field must be styled `display: none` — never visible to users. Server rejects any submission where this field is non-empty.
- Rate limiting applies to `/api/get-started` — 5 submissions per IP per 10 minutes. See `05_Technical-Spec.md` Form Security Requirements.
- GA4 events: fire `signup` event (type: `member`, tier: `go`) on member form success; fire `signup` event (type: `employer`, tier: `lite`) on employer form success.
