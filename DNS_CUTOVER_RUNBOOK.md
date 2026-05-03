# DNS Cutover Runbook — Go-Live

**Project**: Zimasa Website Migration (WordPress → Next.js 14)  
**Domain**: www.zimasahealth.com / zimasahealth.com  
**Prepared**: May 4, 2026  
**Status**: Ready for Launch

---

## Pre-Cutover Checklist (48 hours before)

### Infrastructure
- [ ] Hosting/Vercel deployment configured
- [ ] All environment variables deployed
- [ ] SSL certificate provisioned (valid until _____)
- [ ] CDN configured (if using Vercel Edge)
- [ ] Database/Redis connections tested
- [ ] Backups taken of old site (if migrating from live)

### Content & Links
- [ ] All 31 pages verified working on staging
- [ ] All 38+ redirects tested
- [ ] Blog content published and live
- [ ] Forms tested end-to-end
- [ ] Analytics tracking verified
- [ ] Sitemap generated and valid

### Team Coordination
- [ ] Launch team assembled (developer, ops, product, comms)
- [ ] Communication channels open (Slack, etc.)
- [ ] Escalation contacts identified
- [ ] Rollback plan documented and reviewed
- [ ] Status page or update mechanism ready

### DNS Preparation
- [ ] Current DNS records documented (screenshot or export)
- [ ] New DNS records prepared in config
- [ ] TTL values reduced to 300 seconds (5 min) — **do this 24 hours before cutover**
- [ ] DNS propagation timeline understood (~5-30 minutes globally)
- [ ] DNS provider access verified (login tested)

---

## Go-Live Timeline

### T-24 Hours (Before Launch)
**Actions**: Reduce TTL on DNS records to 5 minutes for faster propagation

```bash
# Current state (should be 3600 TTL for stability)
# zimasahealth.com A record → <old-server-ip>
# www.zimasahealth.com CNAME → <old-server-fqdn>

# 24 hours before launch: reduce TTL to 300 (5 min)
# This allows faster cutover without long propagation delays
```

**Checklist**:
- [ ] Log into DNS provider (GoDaddy / Namecheap / Route53 / etc.)
- [ ] Find A record for zimasahealth.com
- [ ] Find CNAME or A record for www.zimasahealth.com
- [ ] Change TTL from 3600 (or current) to 300
- [ ] Save changes
- [ ] Wait 15 minutes to confirm TTL reduction took effect

### T-0 Hours (Launch Day)

#### Pre-Cutover (1 hour before)
- [ ] All systems green in monitoring
- [ ] Load test passed (simulate expected traffic)
- [ ] Team online and ready
- [ ] Communication channels open
- [ ] Rollback tested and ready

#### Cutover Window (15 minute window)
**Objective**: Update DNS records to point to new Vercel/hosting infrastructure

**Step 1: Point Apex Domain (zimasahealth.com)**

Old state:
```
zimasahealth.com    A       <old-server-ip>     TTL 300
```

New state (after cutover):
```
zimasahealth.com    A       <vercel-ip-or-alias>  TTL 300
```

**OR (if using Vercel):**
```
zimasahealth.com    CNAME   cname.vercel-dns.com  TTL 300
```

**Actions**:
- [ ] Log into DNS provider
- [ ] Navigate to DNS records for zimasahealth.com
- [ ] Update the A or CNAME record to point to new server
- [ ] Save/confirm changes
- [ ] Note the time: ________

**Step 2: Point WWW Subdomain (www.zimasahealth.com)**

Old state:
```
www.zimasahealth.com    CNAME    <old-server-fqdn>   TTL 300
```

New state:
```
www.zimasahealth.com    CNAME    cname.vercel-dns.com  TTL 300
```

**Actions**:
- [ ] Update CNAME record for www.zimasahealth.com
- [ ] Save/confirm changes
- [ ] Note the time: ________

#### Post-Cutover Verification (5-30 minutes)

**Monitor these systems in parallel**:

1. **DNS Propagation**
   ```bash
   # Check DNS propagation (repeat every 2 minutes until resolved)
   nslookup www.zimasahealth.com
   dig www.zimasahealth.com
   
   # Online checker: https://www.whatsmydns.net/
   # Expected: Points to Vercel IP or CNAME
   ```

2. **Website Accessibility**
   - [ ] Open https://www.zimasahealth.com in browser
   - [ ] Page loads without SSL errors
   - [ ] Homepage renders correctly
   - [ ] Click through to 3-4 pages
   - [ ] Forms are present and respond

3. **Email Delivery**
   - [ ] Test form submission on /book-demo
   - [ ] Check that email arrived at hello@zimasahealth.com
   - [ ] Repeat for /contact-us and /get-started

4. **Redirects**
   - [ ] Test legacy URLs redirect correctly
   - [ ] `/platform` → `/solutions` (redirect)
   - [ ] `/index.php` → `/` (redirect)
   - [ ] `/demo` → `/book-demo` (redirect)

5. **Analytics**
   - [ ] Open GA4 in new tab: https://analytics.google.com
   - [ ] Real-time data shows traffic
   - [ ] Verify page views appearing

6. **SSL/Security**
   - [ ] Visit https://www.zimasahealth.com (green padlock)
   - [ ] Check certificate details (should be valid)
   - [ ] No mixed content warnings

7. **Performance**
   - [ ] Open DevTools (F12)
   - [ ] Network tab: assets loading quickly
   - [ ] No 5xx errors
   - [ ] Console: no critical JS errors

**Checklist - All Must Pass**:
- [ ] DNS resolves to new server (nslookup)
- [ ] HTTPS works without warnings
- [ ] Homepage loads
- [ ] Sample pages load (about, solutions, blog)
- [ ] Forms work (test submission)
- [ ] Email delivery works
- [ ] Redirects work (test 3 legacy URLs)
- [ ] GA4 shows real-time traffic
- [ ] No 5xx errors in logs
- [ ] Performance is acceptable

---

## Monitoring During First 24 Hours

### Critical Metrics to Watch

1. **Uptime** (target: 99.9%)
   - [ ] Monitor dashboard: https://vercel.com/dashboard
   - [ ] Uptime monitoring tool (Pingdom / UptimeRobot)
   - [ ] Expected: No downtime > 30 seconds

2. **Error Rate** (target: < 0.1%)
   - [ ] Vercel logs: failed requests
   - [ ] Sentry (if configured): exceptions
   - [ ] Action: Page team if error rate > 1%

3. **Response Time** (target: < 500ms at p95)
   - [ ] Lighthouse metrics in Vercel
   - [ ] CDN response times
   - [ ] Database query times
   - [ ] Action: Investigate if > 2s

4. **Traffic & Load** (baseline for first day)
   - [ ] GA4: sessions/hour
   - [ ] Vercel bandwidth usage
   - [ ] API rate limiting (if applicable)
   - [ ] Expected: Normal traffic, no unusual spikes

### Monitoring Checklist
- [ ] Check status dashboard every 15 minutes (first hour)
- [ ] Check status dashboard every 30 minutes (hours 2-4)
- [ ] Check status dashboard hourly (hours 4-24)
- [ ] Review error logs before bed
- [ ] Resume monitoring next morning

### Alert Triggers (Immediate Action)
- [ ] Uptime drops below 95%
- [ ] Error rate spikes above 5%
- [ ] Response time exceeds 5 seconds
- [ ] Form submissions failing
- [ ] Email delivery failing
- [ ] SSL certificate warning

---

## Rollback Procedures

### If Critical Issues Occur (Use Only If Necessary)

**Rollback Decision Criteria**:
- Multiple pages returning 5xx errors
- Forms not sending emails
- Widespread SSL issues
- Complete service outage > 15 minutes

**Rollback Steps** (reverse the DNS cutover):

1. **Revert DNS Records** (< 5 minutes)
   ```
   Step 1: zimasahealth.com A record → <old-server-ip> (old state)
   Step 2: www.zimasahealth.com CNAME → <old-server> (old state)
   ```
   - [ ] Log into DNS provider
   - [ ] Update A record for apex domain
   - [ ] Update CNAME record for www
   - [ ] Save and confirm
   - [ ] Note time: ________

2. **Verify Old Site is Live** (5 minutes)
   - [ ] Open https://www.zimasahealth.com
   - [ ] Check old site loads (should show previous design)
   - [ ] Verify pages respond
   - [ ] Test forms on old site
   - [ ] Check analytics is tracking

3. **Notify Stakeholders**
   - [ ] Send to #launches Slack channel
   - [ ] Message template: "⚠️ Rolled back DNS to previous site due to [specific issue]. Investigating now."
   - [ ] Set status page to "investigating"

4. **Post-Mortem** (next 24 hours)
   - [ ] Identify root cause
   - [ ] Document issue and fix
   - [ ] Test fix on staging
   - [ ] Schedule re-launch attempt

---

## Post-Launch (After 24 Hours)

### Immediate Actions
- [ ] Reset DNS TTL back to 3600 (1 hour) for stability
- [ ] Disable monitoring alerts (no longer needed)
- [ ] Archive old site backups
- [ ] Celebrate launch! 🎉

### First Week
- [ ] Monitor GA4 for traffic patterns
- [ ] Collect user feedback
- [ ] Fix any bugs reported
- [ ] Monitor search console for crawl issues
- [ ] Check rankings for key terms

### First Month
- [ ] Full SEO audit (Search Console, GA4)
- [ ] Check all redirects one final time
- [ ] Remove any temporary redirects
- [ ] Plan Phase 2 features
- [ ] Document lessons learned

---

## Contacts & Escalation

### Core Team
| Role | Name | Contact | On-Call |
|------|------|---------|---------|
| Launch Lead | ____________ | ____________ | Yes/No |
| Developer | ____________ | ____________ | Yes/No |
| Ops/DevOps | ____________ | ____________ | Yes/No |
| Product | ____________ | ____________ | Yes/No |
| Communications | ____________ | ____________ | Yes/No |

### Escalation Path (In Case of Issues)
1. **Tier 1** (0-5 min): Developer on-call
2. **Tier 2** (5-15 min): Ops + Dev lead
3. **Tier 3** (15+ min): Launch Lead + all hands

### Communication Channels
- **Slack channel**: #launches
- **Status page**: (if applicable)
- **Incident call**: Zoom link ____________

---

## DNS Records Reference

### Current Records (Pre-Cutover)
```
zimasahealth.com
  A       <old-server-ip>          TTL 300

www.zimasahealth.com
  CNAME   <old-server-fqdn>        TTL 300

(Optional, for email)
zimasahealth.com
  MX      10 mail.zimasahealth.com
  SPF     v=spf1 include:resend.net ~all
  DKIM    v=DKIM1; k=rsa; p=<public-key>
```

### New Records (Post-Cutover)
```
zimasahealth.com
  A       <vercel-ip-or-alias>     TTL 300

www.zimasahealth.com
  CNAME   cname.vercel-dns.com     TTL 300

(Email stays same — only change if Resend domain verification needed)
```

---

## Success Criteria

✅ **Launch is successful if ALL of the following are true:**

- [ ] Domain resolves to new site (DNS propagated globally)
- [ ] HTTPS certificate is valid
- [ ] Homepage loads in < 2 seconds
- [ ] All pages are accessible (no 404s or 5xx errors)
- [ ] Forms send emails without errors
- [ ] Redirects work (test > 10 legacy URLs)
- [ ] Analytics shows traffic flowing
- [ ] No critical errors in logs
- [ ] Uptime > 99% in first 24 hours
- [ ] User feedback is positive
- [ ] Sitemap is accessible (/sitemap.xml)
- [ ] robots.txt is accessible (/robots.txt)

---

## Sign-Off

**Pre-Launch Approval**:
- [ ] Developer: __________________ Date: __________
- [ ] Ops: __________________ Date: __________
- [ ] Product: __________________ Date: __________
- [ ] Launch Lead: __________________ Date: __________

**Launch Completion**:
- [ ] DNS cutover completed at __________ (time)
- [ ] All success criteria met
- [ ] Launch Lead: __________________ Date: __________

**Notes**:
_____________________________________________________________________________

---

## Appendix: Useful Commands

### DNS Verification (Run from command line)
```bash
# Check DNS resolution
nslookup www.zimasahealth.com
dig www.zimasahealth.com
host www.zimasahealth.com

# Check for all DNS records
dig www.zimasahealth.com ANY

# Check SSL certificate
openssl s_client -connect www.zimasahealth.com:443

# Check HTTP redirect
curl -I https://zimasahealth.com  # Should redirect to www
```

### Monitoring & Logs
```bash
# Vercel deployment logs
vercel logs [project-name]

# Check uptime
curl -o /dev/null -s -w "%{http_code}\n" https://www.zimasahealth.com

# Monitor real-time
watch 'curl -o /dev/null -s -w "%{http_code}\n" https://www.zimasahealth.com'
```

### Analytics
- Google Search Console: https://search.google.com/search-console
- GA4: https://analytics.google.com
- Vercel Analytics: https://vercel.com/dashboard

---

**Runbook Version**: 1.0  
**Last Updated**: May 4, 2026  
**Next Review**: May 11, 2026 (1 week after launch)
