import express from 'express';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 3001;

// const customeMiddlewareQuerty = (req, res, next) =>{
//     console.log("Query:",req.query.age);
//     if(!req.query.age || req.query.age < 18){
//         res.send('<h1>You are not allowed</h1>');
//     }else{
//         next();
//     }
    
// }

// const customeMiddlewareURL = (req,res,next) =>{
//     console.log("URL:",req.url);
//     next();
// }

app.use((req,res,next)=>{
    console.log('Request URL:', req.url);
    next();
});

app.use('/users',userRoutes);


app.get('/', (req, res)=>{
    res.send('<h1>Hello, Home!</h1>')
});

// app.get('/login',customeMiddlewareQuerty,customeMiddlewareURL, (req, res)=>{
//     res.send('<h1>Hello, login!</h1>')
// });


// app.get('/users',customeMiddlewareQuerty, (req, res)=>{
//     res.send('<h1>Hello, users!</h1>')
// });

// app.get('/products',customeMiddlewareURL, (req, res)=>{
//     res.send('<h1>Hello, products!</h1>')
// });




app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});