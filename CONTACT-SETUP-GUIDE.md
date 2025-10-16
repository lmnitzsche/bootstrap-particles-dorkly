# DorklyAI Contact Information Update Guide

## Quick Reference: Where to Update Contact Information

### 1. Email Addresses

#### Main Contact Form (index.html)
- **Location**: Line ~580-630 (Contact section)
- **Current**: Form submissions need backend configuration
- **Action**: Configure form handler to send to: `contact@dorklyai.com`

#### Footer Links
- **Files**: 
  - `index.html` (line ~650)
  - `pages/case-studies.html` (line ~310)
- **Current**: Generic contact links
- **Action**: Update `href="#form"` or add `mailto:contact@dorklyai.com`

### 2. Booking/Consultation Links

#### Call-to-Action Buttons
- **index.html** (line ~116): Hero section button → `href="#form"`
- **case-studies.html** (line ~141): Header button → `href="../index.html#form"`

**Recommended**: Set up Calendly or similar booking tool
- Create account at calendly.com
- Replace `href="#form"` with your Calendly link
- Example: `https://calendly.com/dorklyai/consultation`

### 3. Social Media Links

#### Footer Social Icons
**Files**: `index.html` (lines ~655-662) and `case-studies.html` (lines ~315-322)

```html
Current placeholders:
- Instagram: href="#"
- Facebook: href="#"
- LinkedIn: href="#"
- Twitter: href="#"
- GitHub: href="#"
```

**Update with your accounts**:
```html
- Instagram: https://www.instagram.com/dorklyai
- Facebook: https://www.facebook.com/dorklyai
- LinkedIn: https://www.linkedin.com/company/dorklyai
- Twitter: https://twitter.com/dorklyai
- GitHub: https://github.com/dorklyai
```

### 4. Phone Number (Optional)

**Where to add**: 
- Footer section
- Contact page header
- About section

**Example markup**:
```html
<p class="mb-2">
    <i class="bi bi-telephone-fill me-2"></i>
    <a href="tel:+1234567890">(123) 456-7890</a>
</p>
```

### 5. Business Address (Optional)

**Where to add**: 
- Footer
- Contact page
- About section

**Example markup**:
```html
<address class="mb-0">
    <i class="bi bi-geo-alt-fill me-2"></i>
    123 Business St, Suite 100<br>
    City, State 12345
</address>
```

## Step-by-Step Setup Guide

### Step 1: Set Up Email
1. Purchase domain: `dorklyai.com`
2. Set up professional email: `contact@dorklyai.com`
3. Create additional emails:
   - `sales@dorklyai.com`
   - `support@dorklyai.com`
   - `info@dorklyai.com`

### Step 2: Configure Contact Form
Choose one option:

**Option A: Third-Party Service (Recommended)**
- FormSpree: https://formspree.io
- Netlify Forms: https://www.netlify.com/products/forms
- FormSubmit: https://formsubmit.co

**Option B: Custom Backend**
- Set up PHP/Node.js backend
- Configure email sending service (SendGrid, AWS SES)
- Add form validation and spam protection

### Step 3: Set Up Booking System
1. Create Calendly account (or alternative)
2. Set up consultation time slots
3. Configure reminder emails
4. Update all CTA buttons with booking link

### Step 4: Create Social Media Accounts

**Priority Accounts**:
1. **LinkedIn** (Most important for B2B)
   - Create Company Page
   - Post about services, case studies, industry insights
   - Connect with target audience

2. **Twitter/X**
   - Share quick tips, updates, industry news
   - Engage with tech community

3. **Instagram** (Optional for B2B)
   - Visual content, behind-the-scenes
   - Company culture, team highlights

4. **Facebook** (Optional)
   - Company page for broader reach
   - Share blog posts, updates

5. **GitHub** (If applicable)
   - Share open-source tools
   - Build developer credibility

### Step 5: Update Website Files

#### For index.html:
```bash
# Search for these and update:
- href="#form" → href="https://calendly.com/dorklyai/consultation"
- href="#" (in social icons) → actual social URLs
```

#### For case-studies.html:
```bash
# Same updates as above
- Update social links
- Update CTA buttons
```

## Email Templates to Set Up

### 1. Contact Form Auto-Response
```
Subject: We Received Your Message - DorklyAI

Hi [Name],

Thank you for reaching out to DorklyAI! We've received your message and will get back to you within 24 hours.

In the meantime, feel free to:
- Schedule a free consultation: [Calendly Link]
- Explore our services: [Website URL]
- Connect with us on LinkedIn: [LinkedIn URL]

Best regards,
The DorklyAI Team

Powering Ambition. Valuing Time.
```

### 2. Sales Inquiry Response
```
Subject: Let's Power Your Business Growth - DorklyAI

Hi [Name],

Thanks for your interest in [Service Name]! We're excited to help you save time and scale your operations.

Next steps:
1. Schedule a free 30-minute consultation: [Calendly Link]
2. We'll discuss your specific needs
3. Receive a custom proposal within 48 hours

Have questions? Reply to this email or call us at [Phone].

Best regards,
[Your Name]
DorklyAI
[Email] | [Phone] | [Website]
```

## Quick Find & Replace Guide

Use your text editor's find & replace to update contact information across all files:

### Find & Replace Operations:

1. **Placeholder Email**
   - Find: `nietzscheagency@gmail.com`
   - Replace: `contact@dorklyai.com`

2. **Old Company Name**
   - Find: `Nietzsche and Company`
   - Replace: `DorklyAI`
   - (Already completed in rebranding)

3. **Old Social Links**
   - Find: `https://www.instagram.com/nietzscheagency`
   - Replace: `https://www.instagram.com/dorklyai`
   
   - Find: `https://www.linkedin.com/company/nietzscheandco`
   - Replace: `https://www.linkedin.com/company/dorklyai`
   
   - Find: `https://www.youtube.com/@nietzscheagency`
   - Replace: Your YouTube channel URL

4. **Old Booking Links**
   - Find: `https://calendly.com/nietzscheandco/consultation`
   - Replace: `https://calendly.com/dorklyai/consultation`

## Testing Checklist

After updating contact information:

- [ ] Test contact form submission
- [ ] Click all email links
- [ ] Click all social media links
- [ ] Test booking/calendar links
- [ ] Verify phone number links (if added)
- [ ] Check footer on all pages
- [ ] Test on mobile devices
- [ ] Verify email auto-responders work
- [ ] Test spam protection on forms

## Professional Email Signature

```
[Your Name]
[Your Title]
DorklyAI

Powering Ambition. Valuing Time.

📧 [your.name]@dorklyai.com
🌐 www.dorklyai.com
📅 Schedule a consultation: [Calendly Link]
💼 LinkedIn: linkedin.com/company/dorklyai

Specializing in:
• Web Development
• Automation Software  
• Social Media Marketing
```

## Important Notes

1. **Privacy**: Add privacy policy before collecting email addresses
2. **GDPR**: If serving EU customers, ensure GDPR compliance
3. **CAN-SPAM**: Include unsubscribe links in marketing emails
4. **Spam Protection**: Use reCAPTCHA on contact forms
5. **Email Verification**: Consider double opt-in for newsletters
6. **Backup**: Keep backup of form submissions
7. **Monitoring**: Set up alerts for form submissions

## Support & Maintenance

- Review contact form submissions daily
- Respond to inquiries within 24 hours
- Update social media 2-3 times per week
- Monitor and respond to social media messages
- Keep booking calendar up to date
- Regular email list cleanup
- Monitor spam filters

---

**Last Updated**: [Current Date]
**Version**: 1.0
