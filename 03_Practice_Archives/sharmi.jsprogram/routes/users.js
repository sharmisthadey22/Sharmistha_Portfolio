import express from 'express';

const app = express.Router();

app.use((req,res,next) => {
    console.log('Request Type:', req.method);
    next();
});

app.get('/',(req, res) =>{
    res.send('<h1>Hello, users!</h1>');
});

app.get('/profile',(req, res) =>{
    res.send('<h1>User Profile</h1>');
});

export default app;