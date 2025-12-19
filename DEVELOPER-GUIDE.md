# Power Platform CoE Site - Developer Guide

## 📁 Project Structure

```
PowerPlatformCoESite/
├── src/                                    # Source code
│   ├── config/
│   │   └── siteConfig.ts                  # ⭐ MAIN CONFIG FILE - All static data here
│   └── webparts/
│       └── powerPlatformCoe/
│           ├── PowerPlatformCoeWebPart.ts # Main web part entry point
│           ├── components/
│           │   ├── PowerPlatformCoe.tsx   # Main component (layout)
│           │   ├── CustomHeader.tsx       # Header with action icons
│           │   ├── HeroSection.tsx        # Top banner
│           │   ├── ServiceCards.tsx       # 3 service model cards
│           │   ├── QuickLinks.tsx         # Sidebar navigation
│           │   ├── ResourcesSection.tsx   # Resources/learning section
│           │   ├── FloatingChat.tsx       # Chat widget component
│           │   └── PowerPlatformCoe.module.scss # 🎨 All styling
│           └── loc/
│               └── en-us.js               # Language strings
├── config/                                 # SPFx build configuration
├── sharepoint/solution/
│   └── powerplatform-coe-site.sppkg      # 📦 Deployment package
└── package.json                            # Dependencies

```

---

## 🎯 Key Files for Developers

### 1. **siteConfig.ts** - MOST IMPORTANT ⭐
**Location:** `src/config/siteConfig.ts`

**What it contains:**
- Site title and description
- Hero section content (title, subtitle, background image, CTA button)
- 3 Service models (Advisory, Production Support, Full Development)
- Quick Links (sidebar navigation)
- Resources/Learning materials
- Theme colors
- Contact information
- Header action icons
- Floating chat configuration

**To modify content:**
```typescript
// Change site title
siteTitle: "Your New Title"

// Change hero section
hero: {
  title: "Your Hero Title",
  backgroundImage: "https://your-image-url.com/image.jpg"
}

// Add/modify service cards
services: [
  {
    id: 1,
    title: "Your Service",
    description: "Description here",
    buttonLink: "https://your-form-url.com"
  }
]

// Add quick links
quickLinks: [
  {
    title: "New Link",
    url: "https://your-url.com",
    icon: "🔗",
    description: "Description"
  }
]
```

---

### 2. **PowerPlatformCoe.module.scss** - All Styling 🎨
**Location:** `src/webparts/powerPlatformCoe/components/PowerPlatformCoe.module.scss`

**What it contains:**
- Dark theme colors (#0a0a0a background, purple gradients)
- Sidebar styles (320px width, collapsible)
- Custom header styles
- Floating Copilot button (top-right corner)
- Service card styles
- Hero section styles
- Responsive breakpoints

**To modify styles:**
```scss
// Change colors
$dark-bg: #0a0a0a;
$primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

// Change sidebar width
$sidebar-width: 320px;

// Change floating button position
.floatingCopilotButton {
  top: 70px;
  right: 30px;
}
```

---

### 3. **Component Files** - UI Logic

#### **PowerPlatformCoe.tsx** - Main Layout
- Manages sidebar open/close state
- Renders all child components
- Contains floating Copilot button click handler

#### **CustomHeader.tsx** - Header Bar
- Displays site title
- Shows action icons (configurable in siteConfig.ts)
- Handles clicks on icons

#### **HeroSection.tsx** - Top Banner
- Displays hero image, title, subtitle
- CTA button
- Props come from siteConfig.ts

#### **ServiceCards.tsx** - 3 Service Models
- Displays 3 cards (Advisory, Support, Development)
- Data from siteConfig.ts
- Each card has features list and button

#### **QuickLinks.tsx** - Sidebar Navigation
- Vertical navigation in sidebar
- Data from siteConfig.ts
- Hover effects and animations

#### **ResourcesSection.tsx** - Resources Grid
- Displays learning materials
- Document/video cards
- Data from siteConfig.ts

#### **FloatingChat.tsx** - Chat Widget
- Bottom-right chat bubble
- Embeds iframe from chatUrl in config
- Can auto-open on page load

---

## 🔧 Common Modifications

### Adding a New Service Card
**File:** `src/config/siteConfig.ts`

```typescript
services: [
  // ... existing services
  {
    id: 4,
    title: "🎓 Training",
    description: "Learn Power Platform skills",
    icon: "📚",
    buttonText: "Request Training",
    buttonLink: "https://forms.office.com/training",
    backgroundColor: "#D83B01",
    features: [
      "Beginner to advanced courses",
      "Hands-on workshops",
      "Certification prep"
    ]
  }
]
```

### Adding a Quick Link
**File:** `src/config/siteConfig.ts`

```typescript
quickLinks: [
  // ... existing links
  {
    title: "Support Portal",
    url: "https://support.yourcompany.com",
    icon: "🆘",
    description: "Get help quickly"
  }
]
```

### Changing Theme Colors
**File:** `src/config/siteConfig.ts`

```typescript
theme: {
  primaryColor: "#0078D4",    // Microsoft Blue
  secondaryColor: "#5C2D91",  // Purple
  accentColor: "#107C10"      // Green
}
```

### Adding Resource/Learning Material
**File:** `src/config/siteConfig.ts`

```typescript
resources: [
  // ... existing resources
  {
    title: "Advanced Canvas Apps",
    type: "video",
    url: "https://your-video-url.com",
    thumbnail: "https://thumbnail-url.com/image.jpg",
    lastUpdated: "Dec 10, 2025"
  }
]
```

### Changing Contact Info
**File:** `src/config/siteConfig.ts`

```typescript
contact: {
  email: "powerplatform@yourcompany.com",
  teamsChannel: "https://teams.microsoft.com/l/channel/YOUR_CHANNEL_ID"
}
```

### Disabling Floating Chat
**File:** `src/config/siteConfig.ts`

```typescript
floatingChat: {
  enabled: false,  // Change to false
  // ... rest of config
}
```

### Changing Floating Copilot Button Position
**File:** `src/webparts/powerPlatformCoe/components/PowerPlatformCoe.module.scss`

```scss
.floatingCopilotButton {
  position: fixed;
  top: 70px;      // Change Y position
  right: 30px;    // Change X position (or use 'left')
  // ... rest of styles
}
```

---

## 🚀 Build & Deploy Commands

### Development (Local Testing)
```powershell
# Start dev server
$env:NODE_OPTIONS="--max-old-space-size=8192"
npx gulp serve --nobrowser

# Test at:
# https://enbridge.sharepoint.com/teams/PowerAppscoe/_layouts/15/workbench.aspx
```

### Production (Deploy to SharePoint)
```powershell
# Clean previous builds
npx gulp clean

# Build production bundle
$env:NODE_OPTIONS="--max-old-space-size=8192"
npx gulp bundle --ship

# Create deployment package
npx gulp package-solution --ship

# Package location:
# sharepoint/solution/powerplatform-coe-site.sppkg
```

---

## 📦 Components Used

### React Components
1. **PowerPlatformCoe** - Main container (class component with state)
2. **CustomHeader** - Functional component for header
3. **HeroSection** - Functional component for banner
4. **ServiceCards** - Functional component for service grid
5. **QuickLinks** - Functional component for sidebar
6. **ResourcesSection** - Functional component for resources
7. **FloatingChat** - Functional component for chat widget

### SPFx Libraries
- `@microsoft/sp-webpart-base` - Web part framework
- `@microsoft/sp-core-library` - Core SPFx utilities
- `office-ui-fabric-react` - Fluent UI components
- `react` 17.0.1 - UI library
- `sass` - Styling

### Custom Features
- ✅ Dark theme with purple gradient
- ✅ Collapsible sidebar navigation
- ✅ Custom header with action icons
- ✅ **Floating Copilot button** (triggers native SharePoint agent)
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Smooth animations and transitions

---

## 🎨 Styling Architecture

### SCSS Variables
```scss
$dark-bg: #0a0a0a;           // Main background
$dark-card: #1a1a1a;         // Card background
$text-primary: #ffffff;       // Primary text color
$text-secondary: #b0b0b0;    // Secondary text color
$primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
$sidebar-width: 320px;        // Sidebar width
```

### CSS Classes (BEM-like structure)
- `.powerPlatformCoe` - Main container
- `.sidebar` - Left sidebar
- `.customHeader` - Top header bar
- `.floatingCopilotButton` - Floating AI button
- `.hero` - Hero banner
- `.serviceCard` - Service model cards
- `.resourceCard` - Resource cards

---

## 🐛 Troubleshooting

### Issue: Changes not showing
**Solution:** Clear gulp cache and rebuild
```powershell
npx gulp clean
$env:NODE_OPTIONS="--max-old-space-size=8192"
npx gulp serve
```

### Issue: Node version errors
**Solution:** Run the patch script
```powershell
node patch-node-version.js
```

### Issue: Out of memory during build
**Solution:** Increase Node memory
```powershell
$env:NODE_OPTIONS="--max-old-space-size=8192"
```

### Issue: Floating button not working
**Solution:** Check selector in CustomHeader.tsx
The button tries to find `#SUITENAV_COPILOT` on the page. Works only on actual SharePoint pages, not workbench.

---

## 📝 URL Placeholders to Update

Search for **"CHANGE THIS"** in `siteConfig.ts` to find all URLs that need updating:

1. Service button links (forms)
2. Quick links URLs
3. Resource/document URLs
4. Contact email
5. Teams channel link
6. Hero background image
7. Chat bot embed URL

---

## 🔄 Update Workflow

1. **Edit content** → Modify `src/config/siteConfig.ts`
2. **Edit styles** → Modify `src/webparts/powerPlatformCoe/components/PowerPlatformCoe.module.scss`
3. **Edit components** → Modify respective `.tsx` files
4. **Test locally** → Run `gulp serve`
5. **Build** → Run `gulp bundle --ship && gulp package-solution --ship`
6. **Deploy** → Upload `.sppkg` to App Catalog
7. **Verify** → Test on SharePoint page

---

## 🎯 Key Features Summary

✅ **Fully configured dark theme** with purple gradients  
✅ **All content centralized** in `siteConfig.ts`  
✅ **3 service models** with features and buttons  
✅ **Sidebar navigation** with 6 quick links  
✅ **Resources section** for learning materials  
✅ **Floating Copilot button** that triggers native SharePoint agent  
✅ **Responsive design** for mobile/tablet/desktop  
✅ **Easy to modify** - no need to touch component code  

---

## 📞 Support

For questions or issues:
- Check this guide first
- Review `siteConfig.ts` comments
- Check console for errors (F12 in browser)
- Contact development team

