function generateHTML(data) {

    return `
    ${JSON.stringify(data)}
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma-rtl.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./assets/css/styles.css" />
    <title>Team Profile Generator</title>
    </head>
    
    <body>
      <header>
        <h1 class="title">My Team</h1>
      </header>
      <div class="card">
        ${renderTeam(data)}
    </div>
    
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by ${data[0].employeeName}</h3>
      </footer>
    </body>
    </html>
    `;
}

function renderExtraInfo(element) {
    console.log('rendering extra info', element);
    if (element.getRole() === 'manager') {
        return `<button>Office Number:${(element.officeNumber)}</button>`;
    }

    if (element.getRole() === 'Engineer') {
        return `<button>GitHub:${(element.github)}</button>`;
    }

    if (element.getRole() === 'Intern') {
        return `<button>School Name:${(element.school)}</button>`;
    }
}

function renderTeam(data) {
    console.log('rendering team', data);
    let output = '';
    data.forEach(element => {
        console.log('rendering employee', element);

        output += `<div class="card-content">
        <p class="title">
          ${(element.name)}
          ${(element.getRole())}
        </p>
        <ol class="subtitle">
          <li>Employee ID: ${(element.id)}</li>
          <li>Email Adrress: ${(element.email)}</li>
          ${renderExtraInfo(element)}
        </ol>
      </div>`;
    })
    return output;
}

module.exports = generateHTML;