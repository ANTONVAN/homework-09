const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
{
	type: 'input',
	message: 'What is your GitHub username?',
	name: 'username',
},
{
	type: 'input',
	message: 'What is your email adress?',
	name: 'email',

},
{
	type: 'input',
	message: 'What is your project\'s name?',
	name: 'project',

},
{
	type: 'input',
	message: 'Please write a short description of your project',
	name: 'description',

},
{
	type: 'list',
	message: 'What kind of license should your project have?',
	name: "license",
	choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"]	
},
{
	type: 'input',
	message: 'What command should be run to install dependencies?',
	name: 'dependencies',

},
{
	type: 'input',
	message: 'What command should be run to run the tests?',
	name: 'tests',

},
{
	type: 'input',
	message: 'What does the user need to know about using to the repo?',
	name: 'using',

},
{
	type: 'input',
	message: 'What does the user need to know about contributing to the repo?',
	name: 'contributing',

}];

// function to write README file
function writeToFile(fileName = "mynewfile.md", data) {
	fs.writeFile(fileName,data,function(err){
		if(err) throw err;
		console.log("saved");
	});
}

// function to initialize program
function init() {
	inquirer.prompt(questions)
	.then((response)=>{
		console.log("Generating README...");
		textToWrite = generateMarkdown(response);
		writeToFile("mynewfile.md", textToWrite);
	});
}


// function call to initialize program
init();

