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
  "Enter your contact info so people may reach out with questions.",
];

// TODO: Create a function to write README file
// const writeFile = (data) =>
//   fs.writeToFile("README.md", data, (err) =>
//     err
//       ? console.error(err)
//       : console.log("Success! Your README.md has been created.")
//   );

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
        type: "input",
        message: questions[4],
        name: "license",
      },
      {
        type: "input",
        message: questions[5],
        name: "contribute",
      },
      {
        type: "input",
        message: questions[6],
        name: "testing",
      },
      {
        type: "input",
        message: questions[7],
        name: "contact",
      },
    ])
    .then((data) => {
      // console.log(data);
      generateMarkdown(data);
    });
}

// Function call to initialize app
init();
