const http = require('http');

const  userData = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        email: 'john.doe@example.com'
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        email: 'jane.smith@example.com'
    },
    {
        id: 3,
        name: "Alice Johnson",
        age: 28,
        email: 'alice.johnson@example.com'
    }
];


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(userData));
    res.end();
}).listen(3000)