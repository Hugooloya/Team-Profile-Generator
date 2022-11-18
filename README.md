# Team Profile Generator

[![Inquirer NPM Package](https://img.shields.io/badge/npm%20inquirer-8.2.4-brightgreen)](https://www.npmjs.com/package/inquirer/v/8.2.4)
[![Jest NPM Package](https://img.shields.io/badge/npm%20jest-29.3.1-brightgreen)](https://www.npmjs.com/package/jest)

## Description

This project required building a Node.js command-line application which takes in information about employees on a team and generates an HTML webpage that displays summaries for each integrant.
There are tests for each part of the code using Jest to ensure that it passes them.

When prompted for team members and their information, then an HTML is generated that displays a nicely formatted team roster based on user input.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Technology Used](#technology-used)
- [Links](#Links)

## Installation

To install this application, clone the code in your terminal. Then, install npm by entering the command `npm init` into the terminal. Inquirer must then be installed by entering `npm install inquirer`. Finally, the application can be run by entering `node index.js` in the command line, and answering each question.

```JavaScript
npm install inquirer

cont inquirer = require('inquirer');
  return inquirer.prompt([
    {
    /* Pass your questions in here */
  }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
```


## Technology Used

- HTML
- CSS
- JavaScript
- Node.js
- Inquirer
- Path
- Jest

## 🔗 Links

- [Link to demo video](https://drive.google.com/file/d/1ZZhjt0zkLy7qwJ4pGfiQqdpN-bMLzvCB/view)
- [Link to Github Repo](https://github.com/Hugooloya/Team-Profile-Generator)

