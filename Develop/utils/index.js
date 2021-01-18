// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub account?", //go to question section
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?", //go to question section
    },

    {
        type: "input",
        name: "title",
        message: "What is your project name?",
    },

    {
        type: "input",
        name: "description",
        message: "What is this project about?",
    },


    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions users need to follow",
    },

    {
        type: "input",
        name: "usage",
        message: "How to use this app?",
    },

    {
        type: "list",
        name: "license",
        message: "What is the license used?",
        choices: ["The MIT License", "GNU General Public License family", "Apache License", "PostgreSQL License", "N/A"],
        //go to badge section
    },

    {
        type: "input",
        name: "contributing",
        message: "Any info about contributing to this project?",
    },

    {
        type: "input",
        name: "test",
        message: "Any info about tests?",
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
};



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("exampleREADME.md", generateMarkdown(data));
        })
};

// Function call to initialize app
init();


