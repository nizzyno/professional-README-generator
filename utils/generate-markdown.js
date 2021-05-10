function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'The Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'GNU General Public License v3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'The Unlicense') {
    return 'http://unlicense.org/';
  }
}

function renderLicenseSection(license) {
  return `This project is licensed under [${license}](${renderLicenseLink(
    license
  )}).`;
}

// Function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  ${data.license !== 'No License' ? '- [License](#license)' : ''}
  ## Installation
  ${data.installation}
  To install the necessary dependencies for this application, run the following commands in your command line while in the project root directory:  
  \`\`\`
  ${data.installationCommands}
  \`\`\`
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Testing
  To run the test suite for this application, run the following commands in your command line while in the project root directory:  
  \`\`\`
  ${data.testCommands}
  \`\`\`
  ## Questions
  [My GitHub Site](https://www.github.com/${data.userName})\\
  If you have any additional questions or concerns, please contact me by email at <${
    data.email
  }>.
  ${renderLicenseSection(data.license)}`;
};

module.exports = generateMarkdown;
