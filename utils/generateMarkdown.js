// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.includes("MIT License")) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes("MIT License")) {
    return "[Click here for more info on licensing](https://en.wikipedia.org/wiki/MIT_License)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.includes("MIT License")) {
    return `
    Copyright (c) 2022 Bryan Tempini
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`;
  }
}

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
  ------
  ${renderLicenseBadge(data.license)}  ${renderLicenseLink(data.license)}    
  ${renderLicenseSection(data.license)}
  ## Contributors
  
  ---
  ${data.contributors}
  ## Testing
  
  ---
  ${data.testing}
  ## Contact
  
  ---
  Linkedin:${data.linkedin}<br>
  Github:${data.github}<br>
  Email:${data.email}<br>
  `;
}

module.exports = generateMarkdown;
