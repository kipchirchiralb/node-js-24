// modules -- pieces of code written to perform specific tasks
// example --- file system module , operating system module, crypto module, ....
// - buitl in modules(they preloaded/built into node js)
// to use modules you have to require/import hem to your working filr
const fsystem = require("fs")
// fsystem.watch("notes.txt", (action)=>{
//     console.log(action);
// })



fsystem.writeFile("newworld.txt", "hellomy name is albert, this is the new world", "utf8", (err)=>{
    // no error
})
// fs, os, netwok -- http module





// fsystem.readFile("notes.txt", "utf8", (err, data)=>{
//     console.log(typeof data);
//     let count = 0
//     data.split(" ").forEach(word=>{
//         console.log(word);
//         if(word.toLowerCase()=="javascript"){
//             count++
//         }
//     })
//     console.log(count);
// })
// callback
// hof ---  take other functions as arguments or return functions. 
// 