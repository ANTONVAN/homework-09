// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  # Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation) 
  * [Usage](#usage)
  * [Licencse](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  # To install necessary dependencies, run the following command:
  
  ${data.dependencies}
  
  

  ## Usage
  ${data.using}

  ## License
  # This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributing}	

  # Tests
  ${data.tests}

  ## Questions
  # If you have any questions about the repo,
   open an issue or contact me directly at 
  ${data.email}. You can find more of my work at 
  ${data.username} (https://github.com/${data.username}/).
  
  
`;
}

module.exports = generateMarkdown;
