import http from 'http';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

// console.log(uuidv4());

const PORT = 3002;

// Load URLs from file or initialize empty object
let urls = {};
try {
    if (fs.existsSync('urls.json')) {
        urls = JSON.parse(fs.readFileSync('urls.json', 'utf-8'));
    }
} catch (err) {
    urls = {};
}

// function to save urls to a json file
function saveurl() {
    fs.writeFileSync('urls.json', JSON.stringify(urls, null, 2));
}

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/shorten") {
        let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        try {
          const { originalUrl } = JSON.parse(body);
          if (!originalUrl) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'original URL is required' }));
            return;
          }
          const shortId = uuidv4().slice(0, 6);
          urls[shortId] = originalUrl;
          saveurl();
          res.writeHead(201, {"Content-Type": "application/json"});
          res.end(JSON.stringify({shortUrl:`http://localhost:${PORT}/${shortId}`}));

        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Internal Server Error' }));
        }
    });
  }
  else if (req.method ==="GET") {
    const shorId = req.url.slice(1); // Remove leading '/'
    if (urls[shorId]) {
        res.writeHead(302, { Location: urls[shorId] });
        res.end();
    } else {

    }
  }
  else{
    res.writeHead(404,{ "content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});