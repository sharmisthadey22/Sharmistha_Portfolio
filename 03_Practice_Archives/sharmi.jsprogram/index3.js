import express from 'express';

const app = express();
const PORT = 3002;

app.use(express.json());

let users = [
    {id:1, name:'Sharmistha', age:30},
    {id:2, name:'shila', age:45},
    {id:3, name:'sankalp', age:29},
];

app.get('/users',(req, res)=>{
    res.json(users);
});

app.post('/users',(req, res)=>{
    const newUser = {id:Date.now(), ...req.body};
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id',(req, res)=>{
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === usreId);

  if( index ===-1){
    return res.status(404).json({message: 'User not found'});
  }

  users[index] = {id:userId, ...req.body};
  res.json(users[index]);
});

app.patch('/users/:id',(req, res)=>{
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === usreId);


  if( index ===-1){
    return res.status(404).json({message: 'User not found'});
  }
  users[index] = {...users[index], ...req.body};
  res.json(users[index]);
});


app.delete('/users/:id',(req, res)=>{
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === usreId);

   if( index ===-1){
    return res.status(404).json({message: 'User not found'});
  }

  users.splice(index,1);
  res.json({message: 'User seleted succesfully'});
});

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost${PORT}`);
});

