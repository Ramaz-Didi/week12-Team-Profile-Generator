// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
let Employee = require("./Employee")
class Intern extends Employee {
    
    constructor(name,id,email,school){
       super(name,id,email);
       this.id = id;
       this.school = school;

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
    getSchool(){
        return this.school;

    }
    getRole(){
        return "Intern";
    }
}
console.log(this.name,this.email,this.id,this.github)
module.exports = Intern;