#!/usr/bin/env node

import inquirer from '../lib/node_modules/inquirer/package.json';

const questions = [
    {
        type: 'input',
        name: 'your_name',
        message: 'What is your name'
    },
    {
        type: 'id',
        name: 'identification_number',
        message: 'Add numeric value to organize profiles'
    },
    {
        type: 'email',
        name: 'email_address',
        message: 'enter email address'
    }
]


