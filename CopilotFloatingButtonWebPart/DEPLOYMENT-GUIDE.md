# Copilot Floating Button - Deployment Guide

## Package Information
- **Package Name**: copilot-floating-button-webpart.sppkg
- **Location**: `sharepoint/solution/copilot-floating-button-webpart.sppkg`
- **Build Date**: December 10, 2025
- **Build Hash**: fe030973e5681f86319e

## What's New in This Version

### Improved Chat Detection
This version includes **enhanced detection strategies** to find the SharePoint Copilot chat panel:

1. **Strategy 1**: Detects right-side panels (dialogs, complementary regions, asides, ms-Panels)
   - Looks for panels positioned on the right side of the screen
   - Validates width > 300px and height > 400px

2. **Strategy 2**: Searches for elements with "copilot" or "chat" in ID/class names
   - Uses multiple selector patterns
   - Includes fallback to original selectors (#ChatWrapperId, .fai-CopilotChat, Social Bar)

3. **Strategy 3**: Detects iframes that might contain the chat
   - Useful if Copilot loads in an iframe
   - Checks for right-side positioned iframes with substantial width

### Features
- **Enbridge Branding**: Gray gradient (#58595B → #3a3b3d) with yellow border (#FDB913)
- **Animated Robot Icon**: SVG robot with animated antenna, blinking eyes, and pulse effect
- **Smart Positioning**: Automatically moves left when chat opens to avoid overlap
- **DOM Manipulation**: Uses `setProperty` with `!important` to override SPFx framework styles
- **Multiple Detection Methods**: MutationObserver + 1-second interval checking

## Deployment Steps

### 1. Upload to App Catalog
1. Navigate to your SharePoint Admin Center
2. Go to **More features** → **Apps** → **Open**
3. Click **App Catalog**
4. Go to **Apps for SharePoint**
5. Click **Upload** and select `copilot-floating-button-webpart.sppkg`
6. Check "Make this solution available to all sites"
7. Click **Deploy**

### 2. Add to SharePoint Site
1. Go to your SharePoint site
2. Click **Settings** (gear icon) → **Add an app**
3. Find "Copilot Floating Button"
4. Click **Add**

### 3. Add Web Part to Page
1. Edit any SharePoint page
2. Click **+** to add a web part
3. Search for "Copilot Floating Button"
4. Add it to any section on the page
5. **Publish** the page

### 4. Testing
1. The yellow robot button should appear at the **bottom-right corner** (30px from right, 30px from bottom)
2. Click the robot button to open SharePoint's native Copilot chat
3. The button should **automatically move left** when the chat panel opens
4. Open browser **Developer Tools** (F12) and check the **Console** for detection logs

## Expected Console Output

### When Chat is Closed:
```
[Copilot Button] Checking for chat panel...
[Copilot Button] Chat is CLOSED - No valid panel found
[Copilot Button UPDATE] Set position to default right: 30px, bottom: 30px
[Copilot Button UPDATE] Computed right: 30px
```

### When Chat Opens (Success):
```
[Copilot Button] Checking for chat panel...
[Copilot Button] Strategy 1: Found right-side panel
[Copilot Button] Found chat panel using strategy 1
[Copilot Button] Panel details - Width: 436px, Right: 1920, Height: 800
[Copilot Button] Chat is OPEN - Width: 436
[Copilot Button] State updated to open, forcing position update
[Copilot Button UPDATE] Set position to right: 466px, bottom: 100px
[Copilot Button UPDATE] Computed right: 466px
```

## Troubleshooting

### Button Not Moving When Chat Opens
If the console shows "Chat is CLOSED" even when chat is open:

1. **Inspect the DOM**:
   - Open Developer Tools (F12)
   - Click **Elements** tab
   - Find the chat panel element on the right side
   - Note the element's:
     - Tag name (div, aside, section, etc.)
     - ID attribute
     - Class names
     - Role attribute
     - Aria-label

2. **Share Findings**:
   - Provide the element details so detection selectors can be updated

### Button Not Visible
- Check if the web part is added to the page
- Verify the page is published
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors

### Button Overlaps with Chat
- This should not happen with the new detection strategies
- If it does, the chat panel selector needs updating

## Technical Details

### Detection Method
The component uses **progressive detection strategies**:
- Tries each strategy in order until a match is found
- Uses `getBoundingClientRect()` to check element position and size
- Validates that detected elements are actually visible and positioned correctly

### Positioning Logic
- **Default**: `right: 30px, bottom: 30px`
- **Chat Open**: `right: (chatPanelWidth + 30)px, bottom: 100px`
- Uses `element.style.setProperty(prop, value, 'important')` to ensure styles are applied

### Performance
- MutationObserver monitors DOM changes
- Additional 1-second interval check for reliability
- State updates only when detection status changes (prevents unnecessary re-renders)

## File Locations

### Source Code
- Component: `src/webparts/copilotButton/components/CopilotButton.tsx`
- Web Part: `src/webparts/copilotButton/CopilotButtonWebPart.ts`

### Build Output
- Bundle: `temp/deploy/copilot-button-web-part_fe030973e5681f86319e.js`
- Package: `sharepoint/solution/copilot-floating-button-webpart.sppkg`

## Support
If you encounter issues:
1. Check browser console for logs
2. Verify the chat panel is actually opening (look for visual changes)
3. Use Developer Tools to inspect the chat panel element
4. Share console logs and element details for assistance
