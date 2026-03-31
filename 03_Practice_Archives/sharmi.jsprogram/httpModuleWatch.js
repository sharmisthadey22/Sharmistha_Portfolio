const http = require('http');
let age = 25;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
    <DOCTYPE html>
    <html>
      <head>
        <title>Home Page</title>
      </head>
      <body>
        <h1>My age is: ${age}</h1>
        <h2>Date: ${new Date().toLocaleString()}</h2>
        <p>Refresh the page to see if age changes after modifying the code and restarting the server.</p>
      </body>
    </html>`);
     res.end();
});
server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000' );
});

