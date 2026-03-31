import express from 'express';
import connectDB from './config/db.js';
import UserRoutes from './routes/userRoutes.js';

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

//  user routes
app.use('/api', UserRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});