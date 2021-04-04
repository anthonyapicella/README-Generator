// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge;
    switch (license) {
        case 'MIT':
            licenseBadge =
                '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            return licenseBadge;
        case 'APACHE 2.0':
            licenseBadge =
                '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            return licenseBadge;
        case 'GPL 3.0':
            licenseBadge =
                '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            return licenseBadge;
        case 'ISC':
            licenseBadge =
                '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            return licenseBadge;
        default:
            licenseBadge = 'None';
            return licenseBadge;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  ${data.license !== 'None' ? renderLicenseBadge(data.license) : ''}

  # ${data.title}

  ## Table of Contents
  <ol>
    <li>
      <a href="#about">About</a>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#questions?">Contact</a></li>
  </ol>

  ## About
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Testing
  ${data.test}

  ## License
  This application is distributed under the ${data.license} license.

  ## Questions?
  *Feel free to contact me!*
  
  GitHub: [${data.username}](https://github.com/${data.username})

  Email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
