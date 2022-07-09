const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id = '', email = '', officeNumber = '') {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        inquirer
        .prompt({
            type: 'text',
            name: 'officeNumber',
            message: 'Enter Manager office number'
        })
        .then(({ name }) => {
            this.officeNumber = officeNumber;
            this.getRole();
        })
    }

    getRole() {
        return this;
    }
}

module.exports = Manager;