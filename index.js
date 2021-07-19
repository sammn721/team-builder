const generatehtml = require("./utils/generatehtml");
const fs = require('fs');
const inquirer = require ('inquirer');

const managerQuestions = [
    {
        type: "input",
        message: "What your team manager's name?",
        name: "title"
    }
]

const engineerQuestions = [
    {
        type: "input",
        message: "What your team engineer's name?",
        name: "title"
    }
]

const internQuestions = [
    {
        type: "input",
        message: "What your team intern's name?",
        name: "title"
    }
]

const nextQuestions = [
    {
        type: "input",
        message: "What type of team member would you like to add?",
        choices: ['Manager', 'Engineer', 'Intern'],
        name: "title"
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, data, (err) => err ? console.log(err) : console.log('Success!'));
}

function init() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            const htmlText = generatehtml(answers);
            writeToFile("teampage.html", htmlText);
        });
}

init();