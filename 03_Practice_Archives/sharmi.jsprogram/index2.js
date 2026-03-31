import express, { application } from "express";

const app = express();
const PORT =3002;

app.use(express.json());

app.get('/',(req, res)=>{
    res.send('Hello Home Page from Express!');
})

app.get('/about',(req, res)=>{
    res.send('Hello About Page from Express!');
})

app.get('/search',(req, res)=>{
    const {item} = req.query;
    res.send(`you search Page from: ${item}`);
})

app.post('/users',(req, res)=>{
    const{name,email} = req.body;
    res.send(`User${name}with email ${email} created successfully!`);
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})