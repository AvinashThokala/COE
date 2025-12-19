# 📝 CONTENT MAINTENANCE GUIDE

This guide helps you update content, links, and text without touching complex code.

---

## 🎯 Quick Reference: Where to Edit What

| What You Want to Change | File to Edit | Line Numbers |
|------------------------|--------------|--------------|
| **Support Page Content** | `src/config/pagesConfig.ts` | Lines 12-107 |
| **Reporting Page Content** | `src/config/pagesConfig.ts` | Lines 109-172 |
| **Power BI Dashboard URL** | `src/config/pagesConfig.ts` | Line 115 |
| **Support Email/Links** | `src/config/pagesConfig.ts` | Lines 16-69 |
| **FAQ Questions** | `src/config/pagesConfig.ts` | Lines 72-95 |
| **Home Page Content** | `src/config/siteConfig.ts` | Throughout |

---

## 📄 SUPPORT PAGE UPDATES

### File: `src/config/pagesConfig.ts`

#### Change Support Options (Office Hours, Teams, Email, Tickets)

**Location:** Lines 16-69

**What to change:**
- `ctaLink` - Change the URLs for buttons
- `email` - Update email addresses
- `schedule` - Change office hours timing
- `description` - Update card descriptions

**Example:**
```typescript
{
  id: 1,
  icon: "💬",
  title: "Office Hours",
  description: "Join our weekly office hours", // CHANGE THIS
  schedule: "Every Tuesday, 2:00 PM EST",      // CHANGE THIS
  ctaLink: "https://teams.microsoft.com/...",  // CHANGE THIS
  backgroundColor: "#0078D4"
}
```

#### Change FAQ Questions

**Location:** Lines 75-93

**What to change:**
- `question` - The FAQ question text
- `answer` - The answer text

**Example:**
```typescript
{
  question: "How do I request a license?",     // CHANGE THIS
  answer: "Navigate to Governance page..."     // CHANGE THIS
}
```

**To add new FAQ:**
1. Copy an existing item (from `{` to `}`)
2. Paste it before the closing `]`
3. Add a comma after the previous item
4. Update the question and answer

---

## 📊 REPORTING PAGE UPDATES

### File: `src/config/pagesConfig.ts`

#### Change Power BI Dashboard

**Location:** Line 115

**What to change:**
```typescript
embedUrl: "https://app.powerbi.com/reportEmbed?reportId=YOUR-ID&autoAuth=true&ctid=YOUR-TENANT-ID"
```

**How to get the URL:**
1. Open your Power BI report
2. Click **File** → **Embed report** → **Website or portal**
3. Copy the iframe URL
4. Paste it as the `embedUrl` value

#### Change Dashboard Title/Description

**Location:** Lines 116-117

```typescript
title: "Power Platform Dashboard",                    // CHANGE THIS
description: "Real-time insights into usage..."       // CHANGE THIS
```

#### Change Key Metrics Cards

**Location:** Lines 121-146

**What to change:**
- `title` - Metric name
- `description` - Metric description
- `color` - Card border color

**Example:**
```typescript
{
  icon: "📊",
  title: "Total Apps",           // CHANGE THIS
  description: "Active apps",    // CHANGE THIS
  color: "#0078D4"               // CHANGE THIS
}
```

---

## 🏠 HOME PAGE UPDATES

### File: `src/config/siteConfig.ts`

#### Change Hero Section

**Location:** Lines 50-56

```typescript
hero: {
  title: "Great teams, great products",        // CHANGE THIS
  subtitle: "Empower organizations...",        // CHANGE THIS
  ctaButtonText: "Let's get started",          // CHANGE THIS
  ctaButtonLink: "#",                          // CHANGE THIS
}
```

#### Change Service Cards (Dev Models)

**Location:** Lines 126-182

**What to change:**
- `title` - Service name
- `description` - Service description
- `buttonLink` - Form URL
- `features` - List of features

**Example:**
```typescript
{
  id: 1,
  title: "🤝 Collaborative Development",
  description: "Work together with the CoE team",
  buttonText: "Request Collaboration",
  buttonLink: "https://forms.office.com/...",   // CHANGE THIS
  backgroundColor: "#0078D4",
  features: [
    "Requirements gathering",                   // CHANGE THESE
    "Solution design",
    "Development support"
  ]
}
```

---

## 🎨 STYLING UPDATES

### Colors

**File:** `src/config/siteConfig.ts`  
**Location:** Lines 223-227

```typescript
theme: {
  primaryColor: "#0078D4",     // Main blue
  secondaryColor: "#FDB913",   // Enbridge yellow
  accentColor: "#742774"       // Purple
}
```

### Contact Information

**File:** `src/config/siteConfig.ts`  
**Location:** Lines 230-233

```typescript
contact: {
  email: "powerplatform.coe@enbridge.com",           // CHANGE THIS
  teamsChannel: "https://teams.microsoft.com/..."    // CHANGE THIS
}
```

---

## 🔗 NAVIGATION LINKS

### File: `src/webparts/powerPlatformCoe/components/PowerPlatformCoe.tsx`

**Location:** Lines 434-476

**What pages show in navigation:**
- Governance
- Maker Enablement
- Innovation
- Collaboration
- Support
- Reporting

**To change page names:**
Look for button text like:
```tsx
<button onClick={() => this.navigateToPage('support')}>
  Support                  // CHANGE THIS TEXT ONLY
</button>
```

---

## 📋 ADDING NEW FAQ ITEMS

### Step-by-Step:

1. Open `src/config/pagesConfig.ts`
2. Find the `faqSection` (around line 72)
3. Add a new item before the closing `]`:

```typescript
{
  question: "Your new question here?",
  answer: "Your answer here."
},  // Don't forget the comma!
```

---

## 🚀 DEPLOYING CHANGES

After making changes:

```powershell
# 1. Save all files
# 2. Test locally
npm run serve

# 3. Build for production
npx gulp bundle --ship
npx gulp package-solution --ship

# 4. Upload the new package:
# sharepoint/solution/powerplatform-coe-site.sppkg
```

---

## ⚠️ IMPORTANT RULES

1. **Always keep commas** between items in lists
2. **Keep quotes** around text values: `"like this"`
3. **Don't remove** brackets `{ }` or `[ ]`
4. **Test locally first** with `npm run serve`
5. **Save files** before building

---

## 🆘 TROUBLESHOOTING

### "Build failed" or "Syntax error"
- Check if you're missing a comma between items
- Check if quotes are closed properly
- Look at the line number in the error message

### Changes don't appear
- Clear browser cache (Ctrl+Shift+Delete)
- Run `npx gulp clean` then rebuild
- Check if you saved the file

### Page looks broken
- Verify you didn't delete any brackets `{ }` or `[ ]`
- Check if all quotes are paired: `"text"`
- Compare your changes with the original file

---

## 📞 NEED HELP?

If you're stuck:
1. Check this guide again
2. Look at existing examples in the file
3. Ask the development team
4. DON'T change anything in `.tsx` or `.scss` files unless you know React/CSS

---

## 📝 QUICK CHECKLIST

Before deploying:
- [ ] Saved all edited files
- [ ] Tested locally with `npm run serve`
- [ ] Checked all links work
- [ ] Verified no syntax errors
- [ ] Built production package successfully
- [ ] Uploaded new .sppkg file to App Catalog

---

**Last Updated:** December 17, 2025  
**Version:** 1.0
