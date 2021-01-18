// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return ``
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return ``
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `##license
    The license used is ${license}.`
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Content 







## Description
${(data.description)}

## Installation
Please follow the instructions below to install the application:
${(data.installation)}

## Usage
${(data.usage)}

## License 
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${(data.contributing)}

## Testing
Please follow the instructions below to run tests:
${(data.test)}

## Questions
If you have questions, please email ${(data.email)} and visit my GitHub account ${(data.GitHub)} at https://github.com/${(data.GitHub)}. 

`;
}

module.exports = generateMarkdown;
