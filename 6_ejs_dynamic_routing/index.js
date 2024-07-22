//importing express
const express = require('express')
const app = express() // creating express instance
const path = require('path')

//middlwares
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(express.static(path.join(__dirname, 'public'))) //public folder k andar ki chije direct route pe available hojati h 
// setting ejs as a view engine
app.set('view engine','ejs') //backend ab ejs pages show krega, that is ab html pages bhej skte h repsonse me backend se 


//routes
app.get("/",function(req,res){
    res.render("index")
})

// jo part dynamic hoga us se pehle colon lga do
app.get("/profile/:username",function(req,res){
    // req.params.username
    let name = req.params.username
    res.send(name)
})

app.get("/profile/:username/:age",function(req,res){
    let name = req.params.username
    let age = req.params.age
    // res.send(req.params) // it is an object
    res.send(`Welcome , Name: ${name} and Age: ${age}`)
})

app.listen(3000,function(){
    console.log("server is running")
})
