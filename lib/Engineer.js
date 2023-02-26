// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class
let Employee = require("./Employee")
class Engineer extends Employee {
    
    constructor(name,id,email,github){
       super(name,id,email);
       this.id = id;
       this.github = github;

    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id;
    }
    getGithub(){
        return this.github;

    }
    getRole(){
        return "Engineer";
    }
}
console.log(this.name,this.email,this.id,this.github)
module.exports = Engineer;