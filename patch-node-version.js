// Patch for Node.js version compatibility
const fs = require('fs');
const path = require('path');

const rigPath = path.join(__dirname, 'node_modules', '@microsoft', 'sp-build-web', 'lib', 'SPBuildRig.js');

if (fs.existsSync(rigPath)) {
  let content = fs.readFileSync(rigPath, 'utf8');
  
  // Replace the version check
  content = content.replace(
    /throw new Error\(`Your dev environment.*?\`\);/gs,
    '// Version check disabled'
  );
  
  fs.writeFileSync(rigPath, content);
  console.log('✅ Node.js version check patched successfully!');
  console.log('You can now run: npm run serve');
} else {
  console.log('❌ Could not find SPBuildRig.js');
}
