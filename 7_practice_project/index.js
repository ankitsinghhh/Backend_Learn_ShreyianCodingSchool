const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs'); //file system module

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname, "public")))

app.get("/",function(req,res){
    // res.send("Welcome")
    // fs.readir() -> it returns an array of strings containing the name of files present in thar folder
    fs.readdir(`./files`,function(err,files){
        // console.log(files)
        res.render("index",{files:files}) // function k andar isiliye likhe hai taaki jab file read hojae tabhi render ho index page
    })
   
})

app.get("/edit/:filename",function(req,res){
    res.render('edit',{filename:req.params.filename})
})

app.get('/file/:filename',function(req,res){
    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
        // console.log(filedata)
        res.render('show',{filename:req.params.filename, filedata:filedata})
    })
})

app.post("/create",function(req,res){
    // console.log(req.body) // to check data aa rha hai ki nhi 
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details, function(err){
        res.redirect("/")
    })
})

app.post('/edit/:filename', function(req,res){
    // console.log(req.body) // to check data submitted by edit page
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}.txt`,function(err){
        res.redirect("/")
    })
})

app.listen(3000, function(){
    console.log("server is running on port 3000")
})