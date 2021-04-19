// Function that returns a license badge
const renderLicenseBadge = license => {
  if (license === "No License") {
    return "";
  }

  return `[![license badge] (https://img.shields.io/badge/license-${license}-brightgreen)](${renderLicenseLink(license)})`
};
  
  // Function that returns the license link
  const renderLicenseLink = license => {
    switch(license) {
      case "MIT":
        return "https://opensource.org/licenses/MIT";
      case "Apache":
        return "https://opensource.org/licenses/Apache-2.0";
      case "GPL":
        return "https://opensource.org/licenses/gpl-license";
    }
  };
  
  // Function that returns the license section of README
  const renderLicenseSection = license => {
    if (license === "No License") {
      return "";
    }
    return `## License
  Licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  };
  
  // Function to generate markdown for README
  const generateMarkdown = data => {
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
  ${(data.license !== "No License") ? "- [License](#license)" : ""}
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
  If you have any additional questions or concerns, please contact me by email at <${data.email}>.
  ${renderLicenseSection(data.license)}`;
  };

  module.exports = generateMarkdown;