// Packages needed for this app
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for employee info
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "checkbox",
        name: "role",
        message: "What is the employee's role?",
        choices: [
            {name: "Manager"},
            {name: "Engineer"},
            {name: "Intern"}
        ]
    }, 
    {
        type: "input",
        name: "id",
        message: "What is the employee's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "input",
        name: "notes",
        message: "Please include any additional notes (ex. number, GitHub, school, etc.)."
    }
]

questions();

// TODO: Create a function to write the HTML file

// TODO: Create function to create the file. 

// Function call to create page