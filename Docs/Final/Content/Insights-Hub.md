# Insights Hub Page Content
**URL**: `/insights/`  
**File**: `content/pages/insights-hub.mdx`  
**Priority**: P1  
**Audience**: All buyers — awareness and education

---

## Metadata

```yaml
title: "Insights — Health Engagement Playbook | Zimasa"
description: "The Zimasa Insights hub. Practical guidance on health engagement strategy for payers, schemes, employers, and HR teams across East Africa."
ogImage: "/images/og-insights.jpg"
```

---

## Section 1 — Hero

**Eyebrow**: Insights

**Headline**: The Health Engagement Playbook

**Subheadline**: Practical guidance on driving member activation, designing payer programmes, and measuring the outcomes that matter — from the team building the Health Engagement OS for African markets.

**No CTA** (content hub — let the article grid do the work)

**Background**: `bg-surface` with `text-dark`

---

## Section 2 — Category Filter

Four category filter tabs displayed above the article grid. Clicking a tab filters the grid. Default: All.

| Tab | Slug | Description |
|-----|------|-------------|
| All | — | All published posts |
| Playbook | `playbook` | Health Engagement Playbook — strategy and tactics |
| For Payers & Schemes | `payers-schemes` | Programme design, risk management, renewal strategy |
| For Employers & HR | `employers-hr` | Workforce wellness, utilisation, board reporting |
| Zimasa Updates | `zimasa-updates` | Company news and platform updates |

**Filter audience tag**: Secondary filter — All · Payers · Employers · Providers  
(audience filter is applied in addition to category, not instead of it)

---

## Section 3 — Article Grid

**Layout**: 3-column grid on desktop, 2-column on tablet, 1-column on mobile

**Article card structure**:
- Category badge (colour-coded)
- Headline
- Description (1–2 sentences)
- Author name + date
- Read time
- Audience tag (optional)

**Sort**: Most recent first (default)

**Load more**: Show 9 articles initially. "Load More" button fetches next 9.  
*(Phase 1: all posts are SSG — implement as client-side filter on pre-loaded data)*

---

## Section 4 — CTA Band

**Headline**: Get Health Engagement Insights in Your Inbox

**Subtext**: New articles on payer strategy, employer wellness, and platform updates. No spam. Unsubscribe any time.

**Field**: Email address  
**Button**: Subscribe  
**Note**: Phase 1 — this is a mailto link or simple form. Full newsletter integration is Phase 2. For now, collect via the Contact Us form with inquiry type "Newsletter".

**Background**: `bg-green`

---

## Blog Category Pages

Each category has its own page at `/insights/[category]/` with the same layout as the hub — filtered to that category only.

**Category page hero text**:

### Playbook — `/insights/playbook/`
**Headline**: Health Engagement Playbook  
**Subheadline**: Strategy, tactics, and frameworks for driving member activation — from programme design to behaviour science to measuring what matters.

### For Payers & Schemes — `/insights/payers-schemes/`
**Headline**: For Payers & Schemes  
**Subheadline**: Programme design guidance, risk management insights, and renewal strategy for CMOs, CROs, and Risk Managers at health insurers, TPAs, and medical schemes.

### For Employers & HR — `/insights/employers-hr/`
**Headline**: For Employers & HR  
**Subheadline**: Practical guidance on designing workforce wellness programmes, improving utilisation, and generating the reporting that CFOs and boards need to see.

### Zimasa Updates — `/insights/zimasa-updates/`
**Headline**: Zimasa Updates  
**Subheadline**: Platform news, client milestones, and company announcements from the Zimasa team.
