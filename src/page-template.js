let teamArr = [];
generateMgmr = manager => {
    return `
    <div class='card bg-primary col-sm text-left justify-space-around m-2 text-nowrap'>
        <h2 class='card-title'>${manager.name}</h2>
        <div class='card-body'>
            <h3>ID: ${manager.id}</h3>
            <h3>Email: <a  class='text-success' href = "mailto:${manager.email}">${manager.email}</a></h3>
            <h3>Office: ${manager.officeNumber}</h3>
            <p class='text-uppercase font-weight-bold'>${manager.role}</p>
        </div>
    </div>
    `
};

generateEng = engineer => {
    return `
    <div class='card bg-primary col-sm text-left justify-space-around m-2 text-nowrap'>
    <h2 class='card-body'>${engineer.name}</h2>
    <h3>ID: ${engineer.id}</h3>
    <h3>Email: <a class='text-success' href = "mailto: ${engineer.email}">${engineer.email}</a></h3>
    <h3>Github: <a class='text-success' href="https://github.com/${engineer.github}">${engineer.github}</a></h3>
    <p class='text-uppercase font-weight-bold'>${engineer.role}</p>
    </div>`
};
generateTern = intern => {
    return `
    <div class='card bg-primary col-sm text-left justify-space-around m-2 text-nowrap'>
    <h2 class='card-body'>${intern.name}</h2>
    <h3>ID: ${intern.id}</h2>
    <h3>Email: <a class='text-success' href = "mailto: ${intern.email}">${intern.email}</a></h2></h2>
    <h3>School: ${intern.school}</h2>
    <p class='text-uppercase font-weight-bold'>${intern.role}</p>
    </div>`
};
generateTeam = team => {
    // console.log(team[0].role);
    for (let i = 0; i < team.length; i++) {
        switch (team[i].role) {
            case 'Manager':
                teamArr.push(generateMgmr(team[i]));
                break;
            case 'Engineer':
                teamArr.push(generateEng(team[i]));
                break;
            case 'Intern':
                teamArr.push(generateTern(team[i]));
                break;
            default:
                break;
        }
    }
    // console.log(teamArr);
    teamArr = teamArr.join(``);
    return teamArr;
};

module.exports = input => {
    // destructure page data by section
    console.log(input);
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Builder</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    </head>
    
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title bg-dark px-3 py-2 text-light">Team Profile Builder</h1>
            </div>
        </header>
        <section class= 'container'>
            <div class='row justify-space-between'>
                ${generateTeam(input)}
            </div>
        </section>
    </body>
    </html>
    `;

};