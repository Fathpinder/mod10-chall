// const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;

    // getName() {
    //     // inquirer
        //     .prompt({
        //         type: 'text',
        //         name: 'name',
        //         message: 'Enter employee name'
        //     })
        //     .then(({ name }) => {
        //         this.name = name;
        //         this.getId();
        //     })

//     }

//     getId() {
//         // inquirer
//         //     .prompt({
//         //         type: 'text',
//         //         name: 'id',
//         //         message: 'Enter employee id'
//         //     })
//         //     .then(({ id }) => {
//         //         this.id = id;
//         //         this.getEmail();
//         //     });

//     }
//     getEmail() {
//         // inquirer
//         //     .prompt({
//         //         type: 'text',
//         //         name: 'email',
//         //         message: 'Enter employee email'
//         //     })
//         //     .then(({ email }) => {
//         //         this.email = email;
//         //     });
//     }


//     getRole() {
//         return this;
//     }

// }

