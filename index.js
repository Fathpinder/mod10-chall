const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

const mgmrQs = [{
    type: 'text',
    name: 'name',
    message: 'Enter team manager"s name'
},
{
    type: 'text',
    name: 'id',
    message: 'Enter team manager"s id'
},
{
    type: 'text',
    name: 'email',
    message: 'Enter team manager"s email'
},
{
    type: 'text',
    name: 'officeNumber',
    message: 'Enter team manager"s office number'
}
];
const menuQs = [{
    type: 'list',
    message: 'What would you like to do?',
    name: 'action',
    choices: ['Add Engineer', 'Add Intern', 'Finish building team']
}
];
const enginQs = [{
    type: 'text',
    name: 'name',
    message: 'Enter engineer"s name'
},
{
    type: 'text',
    name: 'id',
    message: 'Enter engineer"s id'
},
{
    type: 'text',
    name: 'email',
    message: 'Enter engineer"s email'
},
{
    type: 'text',
    name: 'github',
    message: 'Enter engineer"s github username'
}];
const intQs = [{
    type: 'text',
    name: 'name',
    message: 'Enter intern"s name'
},
{
    type: 'text',
    name: 'id',
    message: 'Enter intern"s id'
},
{
    type: 'text',
    name: 'email',
    message: 'Enter intern"s email'
},
{
    type: 'text',
    name: 'school',
    message: 'Enter intern"s school'
}];
const team = [];


addMgmr = () => {
    inquirer
        .prompt(mgmrQs)
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            team.push(manager);
            menu();


        })
};

addEng = () => {
    inquirer
        .prompt(enginQs)
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            team.push(engineer);
            menu();


        })
}

addInt = () => {
    inquirer
        .prompt(intQs)
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            team.push(intern);
            menu();


        })
}

menu = () => {
    inquirer
        .prompt(menuQs)
        .then((response) => {
            switch (response.action) {
                case 'Add Engineer':
                    addEng();
                    break;
                case 'Add Intern':
                    addInt();
                    break;
                case 'Finish building team':
                    // this is the function that will write HTML page
                    console.log(team);
                    fs.writeFile('./dist/index.html', generatePage(team), err => {
                        if (err) {
                            reject(err);
                            return;
                        } else {
                            console.log('team HTML created');
                        }
                    });
                    break;
                default:
                    break;
            }

        }

        )
}

addMgmr();