//----------------------Express.js Framework-----------------------------------

// ? -> express js ek npm package hai 
// framework -> ye btata hai ki knsi chij kaise krni h 
// express js manages everything from receiving request and giving the response 

//setting up a basic express application



const express = require('express'); // importing the express module

const app = express(); // express ki puri powers app k variable me aajati h 


//middleware 
app.use(function(req, res, next){
    console.log('middleware is running')
    next(); // means request aage foward kr do
})

app.use(function(req, res, next){
    console.log('middleware is running for second time')
    next(); // means request aage foward kr do
})

//syntax--->  app.get(route, requestHanlder) // :  requestHandler is middleware
app.get('/',function(req,res){ 
    res.send("hello world -- This is my first express application")
    
})



app.get('/profile', function(req,res,next){
    return next(new Error("something went wrong"))
    // res.send("This is the profile page, awesome it is - no!")
})
app.get('/about',function(req,res){
    res.send("This is the about page, wow its great - no!")
})

//error handler 
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000)


//----------------------MiddleWare------------------------

// jab v server request accept krta hai tab wahase route k beech pahuchne tk agr us request ko beech me rokte hai aur kch perform krte h toh is element ko middleware kehte h 

// middleware is a function that takes three arguments: req, res, and next. req is the request object, res is the response object, and next is a function that, when called, passes control to the next middleware function in the stack.