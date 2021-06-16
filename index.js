// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Please enter the name of your project'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please enter a description of your project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter instructions on how to install your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions on how to use your project'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, third-party assets, or links to the tutorials used in your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose which license your project uses',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'ISC', 'No License']
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username'
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) =>{
    return new Promise((rej, res) =>{
        fs.writeFile('./files/README.md', (fileName, data), err =>{
            if(err){
                rej(err);
                return;
            }
            res({
                yes: true,
                message: "Success! File has been created."
            });
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(data => {
    console.log(data)
    return generateMarkdown(data);
})
.then(data => {
    return writeToFile('README.md',data)
})
