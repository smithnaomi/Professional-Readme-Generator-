// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
    `;
  }
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case "Apache":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;

    case "Boost":
      link = "https://www.boost.org/LICENSE_1_0.txt";
      break;

    case "BSD 3-clause":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    case "Eclipse":
      link = "https://opensource.org/licenses/EPL-1.0";
      break;

    case "GNU GPL v3":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;

    case "IBM":
      link = "https://opensource.org/licenses/IPL-1.0";
      break;

    case "ISC":
      link = "https://opensource.org/licenses/ISC";
      break;

    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;

    case "Mozilla":
      link = "https://opensource.org/licenses/MPL-2.0";
      break;

    case "SIL":
      link = "https://opensource.org/licenses/OFL-1.1";
      break;

    case "WTFPL":
      link = "http://www.wtfpl.net/about/";
      break;

    case "Zlib":
      link = "https://opensource.org/licenses/Zlib";
      break;

    case "none":
      link = "";
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  const section = `This project is using the license ${license}. See ${link} for more information.`;
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const license_body = renderLicenseSection(data.license);
  return `# ${data.title}
    ${badge}
    
    ## Description
    ${data.description}
    
    ## Table of Contents

    - [Introduction](example)
    - [Overview](example2)
    - [Installations](example3)
    - [Usage](example4)
    - [License](example5)
    - [Contributing](example6)
    - [Test](example7)
    - [Contact](example8)

## This is the introduction text
## Description text 
## Needed to use application
## How to use application 
## License choice
## Text to accept contributions
## How to run application
## How to get reach developer 
    

    ## Introduction
    ${data.instruction}

    ## Overview
    ${data.overview}

    ## Installations
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${license_body}
    
    ## Contributing
    ${data.contribution}
        
    ## Test
    ${data.test}
        
    ## Contact
    If you would like to contact me, please refer to the following:
    <br/>
    [github](github.com/${data.git_name})
    <br/>
    <${data.email}>
  `;
}

module.exports = generateMarkdown;
