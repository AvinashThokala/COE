# Power Platform CoE SharePoint Site

A professional, interactive SharePoint site for your Power Platform Center of Excellence team.

![Power Platform CoE](https://img.shields.io/badge/SharePoint-SPFx-blue)
![React](https://img.shields.io/badge/React-17.0.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7.4-blue)

## 🎯 Features

- ✅ **3 Service Models**: Advisory, Production Support, Full Development
- ✅ **Quick Links**: Easy access to resources and tools
- ✅ **Resources Section**: Documentation and learning materials
- ✅ **Hero Banner**: Personalized welcome message
- ✅ **Contact Section**: Direct links to Teams and Email
- ✅ **Fully Responsive**: Works on desktop, tablet, and mobile
- ✅ **Easy to Customize**: Central config file for non-developers

## 📋 Prerequisites

Before you start, make sure you have:

- **Node.js** v16 or v18 (Download from [nodejs.org](https://nodejs.org))
- **Visual Studio Code** (Download from [code.visualstudio.com](https://code.visualstudio.com))
- **SharePoint Online** environment (for deployment)

## 🚀 Quick Start

### Step 1: Install Dependencies

Open PowerShell in this folder and run:

```powershell
npm install
```

This will install all required packages (may take 3-5 minutes).

### Step 2: Customize Your Content

**IMPORTANT: Edit this file to change all content!**

Open: `src/config/siteConfig.ts`

This file contains ALL your text, links, and settings. Change:

- ✏️ Service descriptions
- ✏️ Form URLs
- ✏️ Quick link URLs
- ✏️ Resource links
- ✏️ Contact information
- ✏️ Colors and branding

**Example:**
```typescript
contact: {
  email: "powerplatform.coe@yourcompany.com", // ← CHANGE THIS
  teamsChannel: "https://teams.microsoft.com/..." // ← CHANGE THIS
}
```

### Step 3: Test Locally

Run the development server:

```powershell
gulp serve
```

This will:
1. Open your browser automatically
2. Show the local workbench at `https://localhost:4321/temp/workbench.html`
3. Allow you to add and test your web part

**To add the web part in workbench:**
1. Click the **+** (plus) icon
2. Search for "Power Platform CoE"
3. Click to add it to the page

### Step 4: Make Changes

While `gulp serve` is running:

1. Edit `src/config/siteConfig.ts` to change content
2. Edit component files in `src/webparts/powerPlatformCoe/components/` for advanced changes
3. Save files
4. Browser will auto-refresh with your changes

Press `Ctrl+C` to stop the server.

## 📦 Build for Deployment

When ready to deploy to SharePoint:

```powershell
# Create production build
gulp bundle --ship

# Package the solution
gulp package-solution --ship
```

This creates: `sharepoint/solution/powerplatform-coe-site.sppkg`

## 🌐 Deploy to SharePoint

### Step 1: Upload to App Catalog

1. Go to SharePoint Admin Center: `https://YOURTENANT-admin.sharepoint.com`
2. Navigate to **More features** → **Apps** → **Open**
3. Click **App Catalog** (create one if it doesn't exist)
4. Go to **Apps for SharePoint** library
5. Upload `powerplatform-coe-site.sppkg`
6. Check "Make this solution available to all sites"
7. Click **Deploy**

### Step 2: Add to SharePoint Page

1. Go to your SharePoint site
2. Create or edit a page
3. Click **+** to add a web part
4. Search for "Power Platform CoE"
5. Add it to the page
6. Click **Publish**

## 📁 Project Structure

```
PowerPlatformCoESite/
├── src/
│   ├── config/
│   │   └── siteConfig.ts          ← 🔥 EDIT THIS FILE (Main config)
│   └── webparts/
│       └── powerPlatformCoe/
│           ├── components/
│           │   ├── PowerPlatformCoe.tsx      (Main component)
│           │   ├── HeroSection.tsx           (Hero banner)
│           │   ├── ServiceCards.tsx          (3 service models)
│           │   ├── QuickLinks.tsx            (Quick links grid)
│           │   ├── ResourcesSection.tsx      (Resources)
│           │   └── PowerPlatformCoe.module.scss (Styles)
│           └── PowerPlatformCoeWebPart.ts
├── config/                        (SPFx configuration)
├── package.json                   (Dependencies)
└── README.md                      (This file)
```

## 🎨 Customization Guide

### For Non-Developers

**Everything you need to change is in ONE file:**

`src/config/siteConfig.ts`

### What You Can Change:

#### 1. Hero Banner
```typescript
hero: {
  title: "Your Title Here",
  subtitle: "Your subtitle",
  backgroundImage: "URL to your image",
  ctaButtonText: "Button text",
  ctaButtonLink: "https://your-link.com"
}
```

#### 2. Service Models
```typescript
services: [
  {
    title: "Service Name",
    description: "Service description",
    buttonLink: "https://forms.office.com/your-form-id",
    features: [
      "Feature 1",
      "Feature 2"
    ]
  }
]
```

#### 3. Colors
```typescript
theme: {
  primaryColor: "#0078D4",    // Blue
  secondaryColor: "#5C2D91",  // Purple
  accentColor: "#107C10"      // Green
}
```

#### 4. Contact Info
```typescript
contact: {
  email: "your-email@company.com",
  teamsChannel: "https://teams.microsoft.com/..."
}
```

### For Developers

#### Advanced Styling
Edit: `src/webparts/powerPlatformCoe/components/PowerPlatformCoe.module.scss`

#### Component Logic
Edit component files in: `src/webparts/powerPlatformCoe/components/`

#### Add New Sections
1. Create new component in `components/` folder
2. Import in `PowerPlatformCoe.tsx`
3. Add to render method

## 🔧 Common Commands

```powershell
# Install dependencies
npm install

# Start development server
gulp serve

# Clean build artifacts
gulp clean

# Create production build
gulp bundle --ship

# Package for deployment
gulp package-solution --ship

# Run all in one command
npm run build
```

## 📝 Update Workflow

### Daily Content Updates (Non-Developers)

1. Open `src/config/siteConfig.ts` in VS Code
2. Change text, links, or colors
3. Save file
4. Run `gulp bundle --ship` and `gulp package-solution --ship`
5. Upload new `.sppkg` to App Catalog
6. SharePoint auto-updates all pages

### Development Updates (Developers)

1. Make changes to component files
2. Test with `gulp serve`
3. Commit to Git
4. Build and deploy when ready

## 🆘 Troubleshooting

### "Command not found: gulp"
```powershell
npm install -g gulp-cli
```

### "Node version not supported"
- Install Node.js v16 or v18
- Check version: `node --version`

### "Cannot find module"
```powershell
npm install
```

### Web part not appearing
- Check if solution is deployed in App Catalog
- Verify "Make available to all sites" is checked
- Refresh SharePoint page

### Changes not showing
- Run `gulp clean` then `gulp serve` again
- Clear browser cache
- Check if you're editing the right file

## 🔗 Useful Links

- [SharePoint Framework Documentation](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
- [React Documentation](https://react.dev/)
- [Office UI Fabric](https://developer.microsoft.com/en-us/fluentui)

## 📧 Support

For questions or issues:
- Email: powerplatform.coe@yourcompany.com
- Teams: [Your Teams Channel]

## 📄 License

Internal use only - [Your Organization Name]

---

**Built with ❤️ by the Power Platform CoE Team**
