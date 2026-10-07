# Contact Us Page Content
**URL**: `/contact-us/`  
**File**: `content/pages/contact-us.mdx`  
**Priority**: P1  
**Audience**: All buyers — sales and general inquiries

---

## Metadata

```yaml
title: "Contact Zimasa — Health Engagement Questions"
description: "Get in touch with the Zimasa team. Sales inquiries, provider network applications, support questions, and media requests."
ogImage: "/images/og-contact.jpg"
```

---

## Page Layout

Split layout on desktop: form on the left (60%), contact details on the right (40%).  
Stacked on mobile: contact details first, then form.

---

## Left Column — Form

**Headline**: Get in Touch

**Subtext**: Whether you're a payer exploring a pilot, a provider applying for the network, or have a general question — we'll get back to you within 1 business day.

### Form Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Full Name | Text | Yes | Placeholder: "Your name" |
| Work Email | Email | Yes | Placeholder: "you@company.com" |
| Company / Organisation | Text | No | Placeholder: "Organisation name (optional)" |
| Inquiry Type | Select | Yes | See options below |
| Message | Textarea | Yes | Placeholder: "Tell us what you're looking for..." Min 4 rows |

**Inquiry Type options**:
- Sales inquiry (payer or employer)
- Provider network application
- Support / technical question
- Media or partnership inquiry
- Newsletter signup
- Other

**Submit Button**: Send Message (btn-primary — Orange)

**Privacy note**: "We'll never share your details. By submitting you agree to our [Privacy Policy](/privacy-centre/)."

**Success state** (shown in-place, no redirect):

> **Message received.**  
> Thank you, [Name]. A member of the Zimasa team will be in touch within 1 business day.

**GA4 event on success**: `form_submit` with `form_id: 'contact_us'`

---

## Right Column — Contact Details

**Headline**: Other Ways to Reach Us

**Email**:  
General: support@zimasahealth.com  
Sales: sales@zimasahealth.com

**Phone**:  
0710 241 892

**Location**:  
Nairobi, Kenya  
*(Full address to be confirmed by Founder before go-live)*

**Office hours**:  
Monday – Friday, 8:00 AM – 6:00 PM EAT

---

**Shortcut links**:

For a product demo → [Book a Demo](/book-demo/)  
For provider network → [Join the Network](/healthcare-providers/)  
For platform details → [See Solutions](/solutions/)

---

## Form Destination

`POST /api/contact`

**Email to**: `support@zimasahealth.com`  
**Subject**: `Contact Form — [Inquiry Type] from [Name]`
