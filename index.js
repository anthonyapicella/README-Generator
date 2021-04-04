// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questionsArr = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please provide a brief description of your project.",
        name: "description",
    },
    {
        type: "input",
        message:
            "Please list installation instructions. (Be sure to include any packages that must be downloaded):",
        name: "installation",
    },
    {
        type: "input",
        message: "How will this application be used?",
        name: "usage",
    },
    {
        type: "input",
        message: "List contributors:",
        name: "contributors",
    },
    {
        type: "input",
        message: "Test instructions:",
        name: "test",
    },
    {
        type: "list",
        message: "Which license will you be using?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        message: "GitHub username:",
        name: "username",
    },
    {
        type: "input",
        message: "Email address:",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log("Congrats! Your ReadME is generated.");
        }
    });
}

// TODO: Create a function to initialize app
// build inquirer questions
function init() {
    inquirer.prompt(questionsArr).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    });
}

// Function call to initialize app
init();
