//node.js basics
//working with modules
//file system operations
//understanding http module


// nodejs - it is  a javascript runtime environment

const fs = require('node:fs')

// fs.writeFile("hey.txt","this is a new file",

//     function(err){
//         if(err) console.error(err)
//         else console.log("done")
//     }
// )

// fs.appendFile("hey.txt","\n This is appended text in new line",

//     function(err){
//         if(err) console.error(err)
//         else console.log("done")
//     }
// )

// fs.rename("hey.txt","newhey.txt",

//     function(err){
//         if(err) console.error(err)
//         else console.log("done")
//     }
// )

// fs.copyFile("newhey.txt", "./copy/copyhey.txt", 
//     function(err){
//                 if(err) console.error(err)
//                 else console.log("done")
//             }
// )


// //deleting a file 
// fs.unlink("newhey.txt",
//     function(err){
//                 if(err) console.error(err)
//                 else console.log("deleted")
//             }
// )

// deleting a folder
// by default remvoes only emptry folder 
// to remove non-empty folders - add { recursive: true }
// fs.rm("./copy", {recursive:true},
//     function(err){
//                 if(err) console.error(err)
//                 else console.log("folder deleted")
//             }
// )


//-------------Protocol -> Rules ------------------------

const http = require("http");

const server = http.createServer(
    (req,res)=>{
        res.end("hello world this is http server")
    }
)

server.listen(3000)