import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//Dummy data 
let blogs = [
    {id:1, title: 'First Blog', content: 'This is content of the first blog.', author: "Admin"},
    {id:2, title: 'First Blog', content: 'This is content of the first blog.', author: "User"},
    {id:3, title: 'First Blog', content: 'This is content of the first blog.', author: "Admin"},
];

//Routes
app.get('/', (req,res) =>{
    res.render('home', { title: 'Home Blog' });
});

app.get('/blogs', (req,res) =>{
    res.render("blogs", { blogs });
});

app.get('/blogs/:id', (req,res) =>{
    const blog =blogs.find(b => b.id == parseInt(req.params.id));
    if (!blog) return res.status(404).send('Blog not found');
    res.render('blogDetails', { blog });
});

app.get('/add-blog', (req,res) =>{
    res.render('addBlog');
});

app.post('/add-blog', (req,res) =>{
    const { title, content, author } = req.bady;
    blogs.push({ id: blogs.length +1, title, content, author});
    res.redirect('/blogs');
});

//Delete blog (Admin only)
app.get('/delete/:id', (req,res) =>{
    blogs = blogs.filter(b => b.id != parseInt(req.params.id));
    res.redirect('/blogs');
});

//404 Page
app.use((req, res) =>{
    res.status(404).render('404', { msg: '404 -Page Not Found' });
});

//Start server
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});