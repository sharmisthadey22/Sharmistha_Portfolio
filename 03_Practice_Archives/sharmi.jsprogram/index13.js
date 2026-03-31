import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.set('view enging', 'ejs');

app.get('/posts', async (req, res) =>{
    try{
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await responce.json();
        console.log(posts);
        res.render('posts', { posts });
    } catch (error) { 
        res.status(500).send('Error fetching posts');
    }
});

app.listen(PORT, () =>{
    console.log(`Server iks running on http://localhost:${PORT}`);
});