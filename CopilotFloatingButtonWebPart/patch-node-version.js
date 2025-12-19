// Patch to bypass Node.js version check in SPFx
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'node_modules', '@microsoft', 'sp-build-web', 'lib', 'SPBuildRig.js');

if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace the throw statement with console.warn
  const original = `throw new Error(\`Your dev environment is running NodeJS version \${process.version} which does\` +
                  ' not meet the requirements for running this tool. This tool requires a version of NodeJS' +
                  \` that matches \${this.nodeSupportedVersionRange}\`);`;
  
  const replacement = `console.warn(\`Your dev environment is running NodeJS version \${process.version} which does not meet the requirements, but continuing anyway...\`);`;
  
  if (content.includes('throw new Error(`Your dev environment is running NodeJS version')) {
    content = content.replace(original, replacement);
    fs.writeFileSync(file, content);
    console.log('✅ Node.js version check bypassed successfully!');
  } else {
    console.log('✅ Already patched or pattern not found');
  }
} else {
  console.log('⚠️ SPBuildRig.js not found');
}
