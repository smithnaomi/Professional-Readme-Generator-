// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },
  {
    type: "input",
    name: "name",
    message: "Name of developer?",
    default: "Developer's Name",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of your application.",
    default: "Project Description",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username? (No @ needed)",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use the application?",
    default: "Usage",
  },
  {
    type: "input",
    name: "installation",
    message: "Are Installations needed to use the application?",
    default: "Application Prerequisites",
  },
  {
    type: "list",
    message: "What license are you using?",
    name: "license",
    choices: [
      "Apache",
      "Boost",
      "BSD 3-clause",
      "Eclipse",
      "GNU GPL v3",
      "IBM",
      "ISC",
      "MIT",
      "Mozilla",
      "SIL",
      "Unlicense",
      "WTFPL",
      "Zlib",
      "none",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "How can other developers contribute?",
    default:
      "If you have suggestions for improving this application, please contribute.",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions.",
    default: "Test",
  },
  {
    type: "input",
    name: "contact",
    message: "Have questions or recommendations?",
    default: "Contact Information",
  },
  {
    type: "checkbox",
    message: "Which sections of contents would you like to add to your README?",
    name: "contents",
    choices: [
      {
        name: "introduction",
      },
      {
        name: "overview",
      },
      {
        name: "installations",
      },
      {
        name: "usage",
      },
      {
        name: "license",
      },
      {
        name: "contributing",
      },
      {
        name: "testing",
      },
      {
        name: "contact",
      },
    ],
  },
  {
    type: "input",
    name: "imageSrc",
    message: "Please enter your screenshot image source path or URL",
    default: "demo",
  },
  {
    type: "input",
    name: "Webpage",
    message: "Please enter URL to deployed application",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("readme.md", generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
