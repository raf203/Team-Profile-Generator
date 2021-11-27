function generateHTML(data) {

    return `
    ${JSON.stringify(data)}
    <!DOCTYPE html>
    <html lang="en">
    
	@@ -13,7 +14,7 @@ function generateHTML(data) {
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./assets/css/styles.css" />
    <title>Team Profile Generator</title>
    </head>
    
    <body>
	@@ -24,19 +25,19 @@ function generateHTML(data) {
      <div class="card">
      <div class="card-content">
        <p class="title">
          ${JSON.stringify(data[0].employeeName)}
          ${JSON.stringify(data[0].role)}
        </p>
        <p class="subtitle">
          ${JSON.stringify(data[0].id)}
          ${JSON.stringify(data[0].email)}
          ${JSON.stringify(data[0].extraInfo)}
        </p>
      </div>
    </div>
    
    </body>
    </html>