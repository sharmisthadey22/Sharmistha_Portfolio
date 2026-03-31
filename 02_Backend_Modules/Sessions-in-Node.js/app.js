import express from 'express';
import Session from 'express-session';

const app = express();

app.use(Session({
    secret: "my-SecretKey123",
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge: 1000 * 60 * 60, // 1 hour
        httpOnly: true,
    }
}));

app.get('/', (req, res) => {
    res.send("<h2>Welcome to the Home Page</h2>");
});

//Create
app.get('/login', (req, res) => {
    req.session.user = "Sharmistha"
    res.send("Session created for user Sharmistha");
});

//Protecting a route
app.get('/dashboard', (req, res) => {
    if(req.session.user){
        res.send(`Welcome to your dashboard, ${req.session.user}`);
    } else {
        res.send("Please login to access the dashboard");
    }
});

//Destroying a session
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err){
            return res.send("Error in logging out");
        } 
        res.send("You have been logged out successfully");
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});