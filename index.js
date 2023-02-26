const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
var fsp = require('fs/promises');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team=[];

startProgram()
async function startProgram(){

    
    team.push(new Manager("ramaz",1,"skgs@skvs.com",1000)) 
    team.push(new Intern ("ramaz",1,"skgs@skvs.com","LSE"))
    team.push(new Engineer("ramaz",1,"skgs@skvs.com","akfafi/github.com"))

    let htmlDoc = render(team)
    await fsp.writeFile(outputPath,htmlDoc);
}