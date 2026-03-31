import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todo.routes.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
// const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();


// //Test route
// app.get("/", (req, res) =>{
//     res.send("Todo API is running");
// });

// Rottes
app.use('/api/todos', todoRoutes);

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is runnig on http://localhost:${PORT}`);
});