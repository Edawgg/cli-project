#!/usr/bin/env node

const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: 'input',
        name: 'your_name',
        message: 'What is your name'
    },
    {
        type: 'input',
        name: 'identification_number',
        message: 'Add numeric value to organize profiles'
    },
    {
        type: 'input',
        name: 'email_address',
        message: 'enter email address'
    }
])

.then(function(answer){
    console.log(answer);
});


