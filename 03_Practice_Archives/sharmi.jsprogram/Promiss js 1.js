// const fs = require('fs').promises;

// //write File
// async function writeFileExample(){
//     try{
//         await fs.writeFile("demo.txt","Hello, Worlf!");
//         console.log("File written successfully");
//     } catch(err){
//         console.error("Error witing file:", err)
//     }  
// }
// writeFileExample();

//read File
// async function readFileExample(){
//     try{
//     const data = await fs.readFile("demo.txt","utf8");
//         console.log("File content:", data);
//     } catch(err){
//         console.error("Error witing file:", err)
//     }  
// }
// readFileExample();


//append File
// async function appendFileExample(){
//      try{        
//          await fs.appendFile("demo.txt","\nAppended text");
//     console.log("File appending  successfully");
//      } catch(err){
//          console.error("Error appending file:, err");
//     }  
//  }
// appendFileExample();

//delete File

// async function deleteFileExample(){
//    try{
//         await fs.unlink("demo.txt");
//         console.log("File deleted successfully");
//     } catch(err){
//         console.error("Error deleting file:", err)
//     }  
// }
//deleteFileExample();

// async function crudFileExample(){
//     try{
//     //write File
//     await fs.writeFile("demo.txt","Hello, Worlf!");
//     console.log("File written successfully");

//   //read File
//     const data = await fs.readFile("demo.txt","utf8");
//     console.log("File content:", data);

//     //append File     

//     await fs.appendFile("demo.txt","\nAppended text");
//     console.log("File appending  successfully");

//     //read File
//     const data = await fs.readFile("demo.txt","utf8");
//     console.log("File content:", data);

//     //delete File

//     await fs.unlink("demo.txt");
//     console.log("File deleted successfully");
//     } catch (err){
//         console.error("Error file:", err);
//     }
// }
// crudFileExample();