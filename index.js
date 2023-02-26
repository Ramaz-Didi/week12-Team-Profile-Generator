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
let team = [];
// import inquirer from 'inquirer';


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const additionalInfo = ["officeNumber","office Number","github","GitHub username","school","attending school details"];
const roleArray =["Manager","Engineer","Intern"];
let roleNumber = "";
let role = "Manager";
let teamInfo = [];
function addingEmployeesInfo(position,additionalInfoChoice) {
    console.log(position,additionalInfoChoice)
inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "Please, enter The "+position+"'s name",
            validate: (answer) => {
                if (answer == ''){
                    return "Please enter The "+position+"'s name"
                }
                teamInfo[1] = answer;
                return true
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please, enter The "+position+"'s ID",
            validate: (answer) => {
                if (answer == ''){
                    return "Please, enter The "+position+"'s ID"
                }
                teamInfo[2] = answer;
                return true
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please, enter The "+position+"'s Email",
            validate: (answer) => {
                if (answer == ''){
                    return "Please, enter The "+position+"'s Email"
                }
                teamInfo[3] = answer;
                return true
            }
        },
        {
            type: 'input',
            name: additionalInfo[additionalInfoChoice*2] ,
            message: "Please, enter "+additionalInfo[additionalInfoChoice*2+1],
            validate: (answer) => {
                if (answer == ''){
                    return "Please, enter "+additionalInfo[additionalInfoChoice*2+1]
                }
                teamInfo[4] = answer;
                return true
            }
        },
    ]).then(() =>
    {
            console.log("role before push",role)
        
            if(role == roleArray[2]) 
            {team.push(new Intern(teamInfo[1],teamInfo[2],teamInfo[3],teamInfo[4]))}
                else 
                {   if(role == roleArray[1])
                        {team.push(new Engineer(teamInfo[1],teamInfo[2],teamInfo[3],teamInfo[4]));}
                         else 
                            {team.push(new Manager(teamInfo[1],teamInfo[2],teamInfo[3],teamInfo[4]));};
            
                }
                console.log("after push",role,team);
        justEmployeesAdding()}) //end of .then
} //end of adding function

function justEmployeesAdding(){
inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please indicate Employees Role",
            choices:["Engineer","Intern","finish building team"],
            
        },
    ])
    .then(answer =>{
        if(answer.role==="Engineer" || answer.role==="Intern" ){

            teamInfo[0]= answer.role;
            role=teamInfo[0];
            console.log(teamInfo[0])
            const roleNumber = roleArray.findIndex(element => element == teamInfo[0]);
            addingEmployeesInfo(teamInfo[0],roleNumber);

        }
        else{startProgram()}
        // console.log(teamInfo)
    }) // END of entry

}



addingEmployeesInfo(role,0)



// ----------

async function startProgram(){

    // if (team[0]="")


    // team.push(new teamInfo[0](teamInfo[1],teamInfo[2],teamInfo[3],teamInfo[4]));
    console.log(team)
    // team.push(new Intern ("srgwhgwu",1,"skgs@skvs.com","LSE"))
    // team.push(new Engineer("JSssf adff",2,"skgs@skvs.com","aereqge/github.com"))
    // team.push(new Intern ("reraer aze",5,"skgs@skvs.com","FDG"))
    // team.push(new Engineer("rgergre gmaz",1,"skgs@skvs.com","awrgqwe/github.com"))

    let htmlDoc = render(team)
    await fsp.writeFile(outputPath,htmlDoc);
}