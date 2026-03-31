import express, { text } from 'express'
const app =express();
const PORT =3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
 
// //Define a simple route
// app.get('/', (req,res) => {
//   res.render('index', { title: 'Home Page', message: 'Welcome to the Home Page!'});
// });

//Define Dynamic route
app.get('/user/:username', (req, res) => {
  const username = req.params.username;
  res.render('index', { title: 'User Page', message: `Welcome, ${username}!`})
});

//Start the server
app.listen(PORT, () =>{
  console.log(`Server is running on http://localhost:${PORT}`);
});