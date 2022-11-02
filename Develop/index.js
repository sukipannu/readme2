// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project name?",
        name: "project name"
    },
    {
        type: "input",
        message: "Write a description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Which command should be ran to install dependencies?",
        name: "installation command"
    },
    {
        type: "input",
        message: "What does the user need to know about using this repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to this repository?",
        name: "contribution"
    },
    {
        type: "input",
        message: "Which command should be ran for testing?",
        name: "tests"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "APACHE",
            "BSD",
            "GPL",
            "MIT",
            "None"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown (data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('Success')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    }); 
}

// Function call to initialize app
init();