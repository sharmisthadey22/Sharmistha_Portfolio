// const fs = require('fs');

// fs.readFile('text.txt', 'utf8',(err,data)=>{
//     if(err){
//         console.error('Error reading file:',err);  ///// Asych
//     }
//     console.log('File contrnt:', data);
// })


//sync
// const data = fs.readFileSync('text.txt','utf8');
// console.log('File content:', data);


//write file
// fs.writeFile('data.tex','Hello From nodejs', (err)=> {
//     if (err) {
//         console.error('Error writing file:', err);
//     }
     
//      console.log('File witten successsfully');
    
// })

// append file

// fs.appendFile('data.txt', '\n sharmistha dey', (err) =>{
//     if (err) {
        // console.error('Error appending to file:', err); //////////
//     }
//     console.log('File appended successfully');
// })


//delete file

// FileSystem.unlink('data.txt',  (err) => {
//      if (err) {
//          console.error('Error deleting to file:', err); //////////
//      }
//      console.log('File deleted successfully')
//     })

 // rename file  
// fs.unlink('newtext.txt','newTextFile.txt'  (err) => {
//      if (err) {
//          console.error('Error renaming to file:', err); //////////
//      }
//      console.log('File renaming successfully')
//     })