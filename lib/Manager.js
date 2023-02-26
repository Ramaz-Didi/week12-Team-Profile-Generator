// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
let Employee = require("./Employee")
class Manager extends Employee {
    
    constructor(name,id,email,officeNumber){
       super(name,id,email);
       this.id = id;
       this.officeNumber = officeNumber;

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
    getOfficeNumber(){
        return this.officeNumber;

    }
    getRole(){
        return "Manager";
    }
}
// console.log(this.name,this.email,this.id,this.github)
module.exports = Manager;