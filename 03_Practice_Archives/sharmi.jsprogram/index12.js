import express from 'express'

const app = express();
const PORT = 4000;

app.set('view engine','ejs');


//dummy data
const users = [
    {name: "Sharmistha Dey",id:1,role:"Admin"},
    {name: "sanklp",id:2,role:"Editor"},
    {name: "Sharmi",id:3,role:"Viewer"},
]

//Dynamic route
app.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find(u => u.id === parseInt(id));
    if (user) {
         res.render('user',{user});
        
    }else{
        res.status(404).send('User not found');
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});