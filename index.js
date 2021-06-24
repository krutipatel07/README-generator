const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a project title.  (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a project title!');
                return false;
            }
        }
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('README created!')
    });
};

// function to initialize program
function init() {
    return inquirer.prompt(questions);
};

// function call to initialize program
init()

    .then(answers => generateMarkdown(answers))
    .then(generatedReadme => writeToFile('README.md', generatedReadme))
    .catch(err => {
        console.log(err);
    });