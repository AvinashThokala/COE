/**
 * ====================================================================
 * QUICK START GUIDE - READ ME FIRST!
 * ====================================================================
 * 
 * Welcome to your Power Platform CoE SharePoint Site!
 * 
 * STEP 1: Install Dependencies
 * ----------------------------
 * Open PowerShell in this folder and run:
 *   npm install
 * 
 * This will take 3-5 minutes.
 * 
 * STEP 2: Customize Your Content
 * ------------------------------
 * Open this file:
 *   src/config/siteConfig.ts
 * 
 * Change:
 * - Service descriptions
 * - Form URLs (replace "https://forms.office.com/your-form-id-X")
 * - Quick link URLs
 * - Contact email and Teams channel
 * - Colors
 * 
 * STEP 3: Test Locally
 * -------------------
 * Run:
 *   gulp serve
 * 
 * Browser opens automatically.
 * Click + and add "Power Platform CoE" web part.
 * 
 * STEP 4: Deploy to SharePoint
 * ----------------------------
 * When ready:
 *   gulp bundle --ship
 *   gulp package-solution --ship
 * 
 * Upload the .sppkg file from sharepoint/solution/ to your App Catalog.
 * 
 * ====================================================================
 * NEED HELP?
 * ====================================================================
 * 
 * Read the full README.md file in this folder for detailed instructions.
 * 
 * Common issues:
 * - "Command not found": Run npm install -g gulp-cli
 * - "Node version": Install Node.js v16 or v18
 * - "Module not found": Run npm install
 * 
 * ====================================================================
 */

// This file is just documentation - you can delete it after reading.
export const QUICK_START = `
Follow the steps above to get started!

Main file to edit: src/config/siteConfig.ts

Commands:
  npm install          - Install dependencies
  gulp serve           - Test locally
  gulp bundle --ship   - Build for production
  gulp package-solution --ship - Create deployment package
`;
