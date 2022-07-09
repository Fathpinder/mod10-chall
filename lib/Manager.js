const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
       return this.officeNumber;
    }


}

module.exports = Manager;

 // inquirer
        // .prompt({
        //     type: 'text',
        //     name: 'officeNumber',
        //     message: 'Enter Manager office number'
        // })
        // .then(({ name }) => {
        //     this.officeNumber = officeNumber;
        //     this.getRole();
        // })