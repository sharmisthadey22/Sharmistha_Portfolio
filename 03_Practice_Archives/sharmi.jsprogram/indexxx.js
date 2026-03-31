import express from 'express';
import path from 'path';
const app = express();
const port = 3000;

const filePath = path.resolve();

app.use(express.static('public'));

app.get('/', (_req, res) => {
    console.log(filePath);
    res.sendFile(filePath+'/index.html');
});

app.get('/about',(req,res) =>{
    res.send('<h1>About Page</h1><p>This is the about page.</p>');
});

app.use((_req, res) => {
    res.status(404).sendFile(`${filePath}/Pagess/404.html`);
});

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
});