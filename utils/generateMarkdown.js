// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ## Table of Contents

  1. Installation
  2. Useage
  3. License
  4. Contributors
  5. Testing
  6. Contact
  
  ## Installation
  
  ---
  ${data.installation}
  ## Useage
  
  ---
  ${data.usage}
  ## License
  
  ---
  ${data.license}
  ## Contributors
  
  ---
  ${data.contributors}
  ## Testing
  
  ---
  ${data.testing}
  ## Contact
  
  ---
  ${data.contact}
  Linkedin:<br>
  Github:<br>
  Email:<br>
  `;
  //reference license functions here

  //return object
}

module.exports = generateMarkdown;
