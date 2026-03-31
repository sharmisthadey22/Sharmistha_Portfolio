import express from 'express';

import homeRoutes from './routess/homeRoutes.js';
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/', homeRoutes);

app.listen(PORT, () => (
    console.log(`Server is running on http://localhost:${PORT}`)
));