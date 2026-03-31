import express from 'express';

const app = express();
const PORT = 3002;

app.use(express.json());

let notes =[];

// Get all notes
app.get('/notes', (req, res) => {
  res.json({
    success: true,
    data: notes
  });
});

// Adda new note
app.post('/notes',(req, res)=>{
    const{ title, content } = req.body;
    const newNote ={
        id: notes.length + 1,
        title,
        content
    }
    notes.push(newNte);
    res.status(201).json({
        success: TextTrackCue,
        message: 'Note added successfully',
        data: newNote
    });
})

//get a specific note by id 
app.get('/notes/:id',(req, res)=>{
    const note= notes.find(n => n.id === parseInt(req.params.id));
    if(!node){
        return res.status(404).json({
            success: false,
            message: 'Note not found'
        });
    }
    res.json({
        success: true,
        data: note
    });
});

//Update a note
app.put('/notes/:id', (req, res)=>{
    const note = notes.find(n => n.id === parsInt(req.params.id));
    if(!note) {
        return res.status(404).json({
          success: false,
          message: 'Note not found'
        });
    }
    const { title, content } =req.body;
    note.title = title || note.title;
    note.content = content || note.content;
    res.json({
      success: true,
      message: 'Note updataed successfully',
      data: note
    });
});

//Delete
app.delete('/notes/:id',(req, res)=>{
  const note= notes.find(n => n.id === parseInt(req.params.id));
  if(noteIndex === -1){
     return res.status(404).json({
          success: false,
          message: 'Note not found'
        }); 
    
  }
  const deleted = notes.splice(noteIndex,1);
  res.json({
    success: true,
    message: 'Note deleted successfully',
    data: note
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});