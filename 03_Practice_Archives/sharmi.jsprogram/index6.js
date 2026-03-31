import express from 'express';

const app = express();
const PORT = 3002;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/api/user',(req,res) =>{
    console.log('JSON Body:', req.body);
    res.json({ msg: 'JSON Data RECEIVED', data: req.body });
});

app.post('/register',(req,res) =>{
    console.log('Form Body:', req.body);
    res.send(`Thanks, ${req.body.username}! Your registration is complete.`);
});

app.get('/Hello',(req,res) =>{
    res.send('Hello from the Express server!');
});

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});