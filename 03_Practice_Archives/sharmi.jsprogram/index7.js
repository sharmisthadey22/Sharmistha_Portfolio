import express  from "express";
import morgan from "morgan";
import cors from "cors"
import rateLimit from "express-rate-limit";


const app = express();
const PORT = 3005;

app.use(morgan('dev'));

app.use(cors());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 5, //limit each IP to 5 requests per windoms
    message: 'Too many request from this IP, please try again after 15 minites',
    standardHeaders: true, // Return rate limit info inthe `Ratelimi
    legacyHeaders: false,  // Disable the `X-RateLimit-*` headers
})
app.use('/', limiter);  // Apply rete limiting to all requests under /

app.get('/',(req, res) =>{
    res.send('Hello 3rd party middleware!');
});

app.get('/api/data',(req, res) =>{
    res.json({ msg: 'Sample API response' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
