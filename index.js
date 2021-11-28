// declare variables
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { inherits } = require('util');

// Input questions
const questions = [{
        type: 'input',
        name: 'employeeName',
        message: 'Enter the name of the team member.',
        validate: nameInput => { if (nameInput) { return true; } else { return false; } }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the id of the team member.',
        validate: idInput => { if (idInput) { return true; } else { return false; } }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email address of the member.',
        validate: emailInput => { if (emailInput) { return true; } else { return false; } }
    },
    {
        type: 'confirm',
        name: 'confirmMembers',
        message: 'Would you like to add more team members?'
    },
];

const membersArray = [];

// Function for add members
function addMembers() { 
    inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: 'Choose the role of the team member:',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'extraInfo',
            message: 'Enter Github username for engineer or enter school name for intern: ',
            validate: extraInput => { if (extraInput) { return true; } else { return false; } }
        }
    ]).then(({ role, extraInfo }) => { repeat(role, extraInfo); })
}

// Function repeat
function repeat(role, extraInfo) {
    inquirer.prompt(questions)
        .then(({ id, employeeName, email, confirmMembers }) => {
            let member;
            
            if (role === 'manager') { 
                member = new Manager(employeeName, id, email, extraInfo)
            } else if (role === 'Engineer') {
                member = new Engineer(employeeName, id, email, extraInfo)
            } else if (role === 'Intern') { member = new Intern(employeeName, id, email, extraInfo) }
            membersArray.push(member); 
            
            if (confirmMembers) { addMembers(); } else { 
                fs.writeFile('./dist/index.html', generateHTML(membersArray), (err) => {
                    
                    if (err) { console.log('There was an error', err) } 
                    console.log("Successfully generated page."); 
                });
            }
        })
}

// Function INIT
function init() { 
    inquirer.prompt([{ 
        type: 'input',
        name: 'extraInfo',
        message: 'Enter your office phone number: ',
        validate: extraInput => { if (extraInput) { return true; } else { return false; } }
    }]).then(({ role, extraInfo }) => {
        role = 'manager'; 
        repeat(role, extraInfo);
    })
}

// Init function
init();