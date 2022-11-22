// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "Please enter the title of your project.",
  "Please enter a brief description of your project. (You can elaborate/adjust later on)",
  "Are there any installation instructions? How do you initialize the app?",
  "What is the usage?",
  "Which type of license would you like to apply?",
  "How can people contribute?",
  "Are there any tests to run and how do you run them?",
  "Enter your linkedin url.",
  "Enter your github url.",
  "Enter your email.",
];

// TODO: Create a function to write README file
const writeReadMeFile = (readme) =>
  fs.writeFile("READMEGEN.md", readme, (err) =>
    err
      ? console.error(err)
      : console.log("Success! Your README.md has been created.")
  );

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "installation",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "list",
        message: questions[4],
        choices: [
          "MIT License",
          "GNU General Public License v3.0",
          "Apache License 2.0",
        ],
        name: "license",
      },
      {
        type: "input",
        message: questions[5],
        name: "contributors",
      },
      {
        type: "input",
        message: questions[6],
        name: "testing",
      },
      {
        type: "input",
        message: questions[7],
        name: "linkedin",
      },
      {
        type: "input",
        message: questions[8],
        name: "github",
      },
      {
        type: "input",
        message: questions[9],
        name: "email",
      },
    ])
    .then((data) => {
      // console.log(data);
      const generatedResult = generateMarkdown(data);
      writeReadMeFile(generatedResult);
    });
}

// Function call to initialize app
init();
