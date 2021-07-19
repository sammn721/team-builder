const generatehtml = require("./src/generatehtml");
const fs = require('fs');
const inquirer = require ('inquirer');

const employees = [];

const employeeQuestions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "number",
        message: "What is the employee's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email"
    }
]

const managerQuestions = [
    {
        type: "number",
        message: "What is your office number?",
        name: "officeNumber"
    }
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "username"
    }
]

const internQuestions = [
    {
        type: "input",
        message: "What school does the intern attend?",
        name: "school"
    }
]

const nextQuestion = [
    {
        type: "list",
        message: "What type of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'Finished building team'],
        name: "next"
    }
]

const confirmFinish = [
    {
        type: "confirm",
        message: "Are you done adding team members?"
    }
]

const writeToFile = (fileName, data) => {
    fs.writeFile(`./output/${fileName}`, data, (err) => err ? console.log(err) : console.log('Success!'));
}



const managerInit = () => inquirer
    .prompt(managerQuestions)
    .then((managerAnswers) => {
        const htmlText = generatehtml(managerAnswers);
        writeToFile("index.html", htmlText);
        askNext();
    });

const askNext = () => {
    return inquirer
    .prompt(nextQuestion)
    .then((nextAnswer) => {
        if(nextAnswer === 'Engineer') {
            askEngineerQuestions();
        } if(nextAnswer === 'Intern') {
            askInternQuestions();
        } else {
            askFinish();
        }
    })
};
const askEngineerQuestions = () => {
    return inquirer
    .prompt(engineerQuestions)
    .then((engineerAnswers) => {
        const htmlText = generatehtml(engineerAnswers);
        writeToFile("index.html", htmlText);
        askNext();
    })
};
const askInternQuestions = () => {
    return inquirer
    .prompt(internQuestions)
    .then((internAnswers) => {
        const htmlText = generatehtml(internAnswers);
        writeToFile("index.html", htmlText);
        askNext();
    })
};
const askFinish = () => {
    return inquirer
    .prompt(confirmFinish)
    .then((finish) => {

    })
};

managerInit();