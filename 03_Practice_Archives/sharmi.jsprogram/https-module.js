// ]

const https = require('https');
const fs = require('fs');
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')

};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end("<h1>Hello Secure World!</h1>");
});
server.listen(3000, () => {
  console.log("HTTPS Server running at https://localhost:3000");
});