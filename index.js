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
        return askNext();
    })
    .then(() => {

    })
    .catch((error) => {
        if (error.isTtyError) {
            //prompt couldn't be rendered in the current environment
        } else {
            //something else went wrong
        }
    });

const askNext = () => {
    return inquirer
    .prompt(nextQuestion)
    .then((nextAnswer) => {
        if(nextAnswer === 'Engineer') {
            return askEngineerQuestions();
        } if(nextAnswer === 'Intern') {
            return askInternQuestions();
        } else {
            return askFinish();
        }
    })
};
const askEngineerQuestions = () => {
    return inquirer
    .prompt(engineerQuestions)
    .then((engineerAnswers) => {
        return askNext();
    })
};
const askInternQuestions = () => {
    return inquirer
    .prompt(internQuestions)
    .then((internAnswers) => {
        return askNext();
    })
};
const askFinish = () => {
    return inquirer
    .prompt(confirmFinish)
    .then((finish) => {

    })
};

managerInit();