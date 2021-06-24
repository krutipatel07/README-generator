// creates table of contents
const createTableOfContents = contentsArr => {

  // creates contents list items based on user selection
  let contentsList = '';
  contentsArr.forEach((item) => {

      // indents 'Screenshots' list item
      if (item.content && item.header === 'Screenshots') {
      contentsList += `   * [${item.header}](#${(item.header).toLowerCase()})
`;
      } else if (item.content) {
          contentsList += `* [${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})
`;
      }
  });
  return contentsList;
};

// function to generate markdown for README
function generateMarkdown(data) {
  const { title, github, repo, license } = data;
  let readmeContents = '';
  const sectionArr = [
      {
          header: 'Installation',
          content: createInstallation(data.installation)
      },
      {
          header: 'Usage',
          content: createUsage(data.usage)
      },
      {
          header: 'Screenshots',
          content: createScreenshots(data.screenshots)
      },
      {
          header: 'Built With',
          content: createBuiltWith(data['built with'])
      },
      {
          header: 'License',
          content: createLicense(license)
      },
      {
          header: 'Contributing', 
          content: data.contributing 
      },
      {
          header: 'Tests',
          content: createTest(data.tests)
      },
      {
          header: 'Questions',
          content: createQuestions(data.questions, github, repo)
      },
      {
          header: 'Credits',
          content: createCredits(data.credits)
      }
  ];
}

## Contents
${createTableOfContents(sectionArr)}