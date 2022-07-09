const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', school = '') {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        inquirer
        .prompt({
            type: 'text',
            name: 'school',
            message: 'Enter intern"s school'
        })
        .then(({ name }) => {
            this.school = this.school
            this.getRole();
        })
    }

    getRole() {
        return this;
    }
}

module.exports = Intern;