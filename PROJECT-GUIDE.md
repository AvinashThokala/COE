# Power Platform CoE Site - Complete Guide

## 📁 Project Structure

```
C:\Projects\PowerPlatformCoESite/
│
├── 📦 DEPLOYMENT PACKAGE (Ready to use!)
│   └── sharepoint/solution/
│       └── powerplatform-coe-site.sppkg  ← **UPLOAD THIS FILE TO SHAREPOINT**
│
├── 🎨 PREVIEW (View without SharePoint)
│   └── PREVIEW.html  ← **OPEN IN BROWSER TO SEE DESIGN**
│
├── ⚙️ CONFIGURATION (Easy editing for non-developers)
│   └── src/config/
│       └── siteConfig.ts  ← **EDIT ALL CONTENT HERE**
│           • Hero section text & background
│           • 3 Service model descriptions
│           • Quick links (titles, URLs, icons)
│           • Resources (titles, descriptions, URLs)
│           • Contact information
│           • Theme colors
│
├── 🧩 COMPONENTS (React UI - Advanced editing)
│   └── src/webparts/powerPlatformCoe/components/
│       ├── PowerPlatformCoe.tsx          ← Main container
│       ├── HeroSection.tsx               ← Top banner with title
│       ├── ServiceCards.tsx              ← 3 service model cards
│       ├── QuickLinks.tsx                ← Quick links grid
│       ├── ResourcesSection.tsx          ← Resources cards
│       └── PowerPlatformCoe.module.scss  ← All styling
│
├── 🔧 WEB PART DEFINITION
│   └── src/webparts/powerPlatformCoe/
│       └── PowerPlatformCoeWebPart.ts  ← SharePoint web part config
│
├── 📋 CONFIGURATION FILES
│   ├── package.json              ← Dependencies & scripts
│   ├── tsconfig.json            ← TypeScript configuration
│   ├── config/package-solution.json  ← SharePoint package config
│   └── gulpfile.js              ← Build tasks
│
└── 🛠️ BUILD SCRIPTS
    ├── patch-node-version.js    ← Node compatibility fix
    ├── START-SERVER.bat         ← Start development server
    └── RUN-SERVER.bat           ← Alternative server script
```

---

## 📝 File Purposes - What Each File Does

### **FILES YOU WILL EDIT:**

#### 1️⃣ **`src/config/siteConfig.ts`** (MOST IMPORTANT!)
**Purpose:** Central configuration for ALL content
**Edit this to change:**
- Hero section title, subtitle, background image
- Service model names, descriptions, icons
- Quick links titles and URLs
- Resources information
- Contact details
- Colors and theme

**Example:**
```typescript
export const siteConfig = {
  hero: {
    title: 'Your Title Here',
    subtitle: 'Your subtitle',
    backgroundImage: 'https://your-image-url.jpg'
  },
  services: [
    {
      title: 'Advisory & Guidance',
      description: 'Your description here',
      // ... more fields
    }
  ]
}
```

#### 2️⃣ **`PREVIEW.html`**
**Purpose:** Standalone preview - open in any browser
**How to use:**
- Double-click to open in browser
- See exactly how your site looks
- No SharePoint needed!
- Show to stakeholders for approval

---

### **FILES FOR DEPLOYMENT:**

#### 3️⃣ **`sharepoint/solution/powerplatform-coe-site.sppkg`**
**Purpose:** SharePoint deployment package
**This is what you upload to SharePoint!**
- Created by: `npx gulp bundle --ship` + `npx gulp package-solution --ship`
- Contains: All compiled code, assets, manifest
- Size: ~200KB (optimized)

---

### **FILES FOR DEVELOPERS (Advanced):**

#### 4️⃣ **React Components** (`src/webparts/powerPlatformCoe/components/`)

**`PowerPlatformCoe.tsx`**
- Main container component
- Renders all sections in order
- Manages layout

**`HeroSection.tsx`**
- Top banner with gradient background
- Displays title, subtitle, CTA button
- Reads from siteConfig.hero

**`ServiceCards.tsx`**
- Displays 3 service model cards
- Grid layout with hover effects
- Reads from siteConfig.services

**`QuickLinks.tsx`**
- Grid of quick access links
- Icons + titles
- Reads from siteConfig.quickLinks

**`ResourcesSection.tsx`**
- Resource cards with descriptions
- External links
- Reads from siteConfig.resources

**`PowerPlatformCoe.module.scss`**
- ALL styling for the entire site
- CSS modules (scoped styles)
- Responsive design
- Colors, spacing, animations

#### 5️⃣ **Web Part Definition**

**`PowerPlatformCoeWebPart.ts`**
- SharePoint web part entry point
- Defines web part properties
- Renders React component
- SharePoint Framework integration

---

## 🚀 DEPLOYMENT PROCESS - Step by Step

### **Prerequisites:**
- ✅ SharePoint Online access
- ✅ App Catalog access (requires admin or site collection admin)
- ✅ Package file: `sharepoint/solution/powerplatform-coe-site.sppkg`

---

### **METHOD 1: Tenant App Catalog (Organization-Wide)**

#### Step 1: Access Tenant App Catalog
1. Go to **SharePoint Admin Center**
   - URL: `https://[tenant]-admin.sharepoint.com`
   - Or: `https://admin.microsoft.com` → Admin centers → SharePoint
2. Click **"More features"** in left menu
3. Under **Apps**, click **"Open"**
4. Click **"App Catalog"**
5. Click **"Apps for SharePoint"**

#### Step 2: Upload Package
1. Click **"Upload"** or drag & drop the `.sppkg` file
   - File location: `C:\Projects\PowerPlatformCoESite\sharepoint\solution\powerplatform-coe-site.sppkg`
2. Dialog appears: **"Make this solution available to all sites?"**
   - ✅ **For testing**: UNCHECK (only specific sites)
   - ❌ **For production**: CHECK (all sites can use it)
3. Click **"Deploy"**

#### Step 3: Add to Your Site
1. Go to your SharePoint site (e.g., Enterprise Platform CoE)
2. Click Settings gear (⚙️) → **"Add an app"**
3. Find **"powerplatform-coe-site"** in the list
4. Click it to add to your site
5. Click **"Trust it"** when prompted

#### Step 4: Add Web Part to Page
1. Go to any page (or create new page)
2. Click **"Edit"** (top right)
3. Click **"+"** where you want to add the web part
4. Search for **"Power Platform CoE"**
5. Click to add it
6. Click **"Publish"** to save

---

### **METHOD 2: Site Collection App Catalog (Site-Specific)**

#### Step 1: Enable Site Collection App Catalog
1. Go to your site's **Site Settings** (⚙️ → Site settings)
2. Under **Site Collection Administration**, click **"Site Collection features"**
3. Find **"Site Collection App Catalog"** and click **"Activate"**
   - If you don't see this, you need site collection admin rights

#### Step 2: Access Site Collection App Catalog
1. Go to **Site Contents** (⚙️ → Site contents)
2. Click **"Site Collection App Catalog"** (newly appeared)
3. Click **"Distribute apps for SharePoint"**

#### Step 3: Upload Package
1. Click **"Upload"** or drag the `.sppkg` file
2. Click **"Deploy"**
3. The app is now available ONLY to this site collection

#### Step 4: Add to Page
(Same as Method 1, Step 4)

---

### **METHOD 3: Ask Your Admin (No Permissions)**

If you don't have App Catalog access:

**Email Template:**

```
Subject: SharePoint Package Deployment Request - Power Platform CoE Site

Hi [Admin Name],

I've developed a custom SharePoint web part for our Power Platform CoE team. 
Could you please deploy the attached package to SharePoint?

Package Details:
• File: powerplatform-coe-site.sppkg
• Type: SharePoint Framework (SPFx) web part
• Purpose: Power Platform CoE team site
• Deployment scope: [Choose one below]
  ☐ Test only - make available to "Enterprise Platform CoE" site only
  ☐ Production - make available organization-wide

Deployment Steps:
1. Upload to Tenant App Catalog (SharePoint Admin Center → Apps → App Catalog)
2. If testing: UNCHECK "Make available to all sites"
3. Click "Deploy"

Once deployed, I'll add it to our site page.

Package location: C:\Projects\PowerPlatformCoeSite\sharepoint\solution\powerplatform-coe-site.sppkg

Thanks!
```

---

## 🔄 Making Updates After Deployment

### **Process for ANY Update:**

#### Step 1: Make Your Changes
Edit the appropriate file:
- **Content changes**: `src/config/siteConfig.ts` (text, links, colors, images)
- **Layout changes**: React components in `src/webparts/powerPlatformCoe/components/`
- **Style changes**: `PowerPlatformCoe.module.scss`

#### Step 2: Update Version Number (Important!)
Edit `config/package-solution.json`:
```json
{
  "solution": {
    "version": "1.0.0.1"  // Increment from 1.0.0.0 → 1.0.0.1
  }
}
```
**Why?** SharePoint uses version numbers to detect updates. Same version = no update!

#### Step 3: Rebuild the Package
```powershell
cd C:\Projects\PowerPlatformCoESite
npx gulp bundle --ship
npx gulp package-solution --ship
```

#### Step 4: Re-upload to App Catalog
1. Go to App Catalog (same place where you first uploaded)
2. Upload the NEW `powerplatform-coe-site.sppkg` file
3. Click **"Replace"** when asked (overwrites old version)
4. Click **"Deploy"**

#### Step 5: Update Sites (Automatic!)
- SharePoint detects the new version
- All pages using the web part will show an **"Update available"** banner
- Click **"Get it"** to update (or wait - it auto-updates within 24 hours)
- **OR** Force immediate update:
  - Go to Site Contents → Find your app → Click "..." → "Update"

### **Quick Update Workflow:**

```powershell
# 1. Edit files
# 2. Increment version in config/package-solution.json
# 3. Run these commands:
cd C:\Projects\PowerPlatformCoESite
npx gulp bundle --ship
npx gulp package-solution --ship
# 4. Upload new .sppkg to App Catalog
# 5. Sites auto-update!
```

### **Update Content Only** (Easy - Non-Developers)

1. Edit `src/config/siteConfig.ts`
2. Change text, links, colors, etc.
3. Increment version number
4. Rebuild package (commands above)
5. Re-upload `.sppkg` to App Catalog
6. SharePoint auto-updates all pages using the web part

### **Update Components** (Advanced - Developers)

1. Edit React components in `src/webparts/powerPlatformCoe/components/`
2. Increment version number
3. Rebuild (same commands as above)
4. Re-upload to App Catalog

---

## 📊 Version Management

Current version: **1.0.0.0**

To change version:
1. Edit `config/package-solution.json`
2. Update `"version": "1.0.0.0"` to new version
3. Rebuild package

SharePoint tracks versions - you can rollback if needed.

---

## 🎯 Quick Commands Reference

```powershell
# Navigate to project
cd C:\Projects\PowerPlatformCoESite

# Install dependencies (first time only)
npm install

# Preview in browser
Start-Process PREVIEW.html

# Build production package
npx gulp bundle --ship
npx gulp package-solution --ship

# Package location
# C:\Projects\PowerPlatformCoESite\sharepoint\solution\powerplatform-coe-site.sppkg
```

---

## 🐛 Troubleshooting

### **Package upload fails**
- Check file size (<100MB)
- Verify `.sppkg` extension
- Check SharePoint admin permissions

### **Web part doesn't appear**
- Wait 5-10 minutes after deployment
- Clear browser cache
- Check if app is "Trusted" on the site

### **Changes don't show**
- Increment version number
- Re-upload package
- Hard refresh page (Ctrl + F5)

### **Permission errors**
- Contact SharePoint admin
- Need "Site Collection Administrator" or "SharePoint Admin"

---

## 📞 Support & Next Steps

### **After Deployment:**
1. ✅ Test on a page
2. ✅ Verify all links work
3. ✅ Check mobile responsiveness
4. ✅ Get stakeholder approval
5. ✅ Deploy to production site

### **Customization:**
- All content edits: `src/config/siteConfig.ts`
- Preview changes: Open `PREVIEW.html` in browser
- Rebuild when ready: Run gulp commands
- Re-upload to SharePoint

---

## 📚 Key Concepts

**SPFx (SharePoint Framework):**
- Modern development framework for SharePoint
- Uses React, TypeScript
- Client-side rendering (fast!)

**Web Part:**
- Reusable component you add to pages
- Like a widget or block
- Can be added to any SharePoint page

**App Catalog:**
- Central repository for custom apps
- Admins control what's available
- Two types: Tenant-wide or Site Collection

**.sppkg File:**
- SharePoint Package
- Contains all your code (bundled)
- Deploy once, use everywhere

---

## ✨ What You Built

**Features:**
✅ Hero banner with gradient background
✅ 3 service model cards (Advisory, Support, Development)
✅ Quick links grid (6 customizable links)
✅ Resources section (3 resource cards)
✅ Contact information section
✅ Responsive design (works on mobile)
✅ Modern UI with hover effects
✅ Easy content editing via config file
✅ SharePoint Online compatible
✅ Production-ready package

**Technologies:**
- SharePoint Framework (SPFx) 1.18.2
- React 17.0.1
- TypeScript 4.7.4
- Office UI Fabric
- SCSS modules

---

## 🎉 You're Ready!

Your package is built and ready to deploy. Just need someone with App Catalog access to upload it!

**Package Location:** 
`C:\Projects\PowerPlatformCoESite\sharepoint\solution\powerplatform-coe-site.sppkg`

**Preview Location:**
`C:\Projects\PowerPlatformCoESite\PREVIEW.html`

**Configuration File:**
`C:\Projects\PowerPlatformCoESite\src\config\siteConfig.ts`
