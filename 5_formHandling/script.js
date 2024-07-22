// form handling and work with forms

// we will handle backend process of forms and making sure data is coming from any frontend library , framework , templating engines, will be handled in backend

//-------------------------session & cookie-------------------------
// hum log kch v data browser pe rakh skte h and jab v aap kch v request  backend par kroge tab wo frontend pe saved data automatically backend pe chla jaega
// a string will be generated and stored in frontend and also in backend so next time jab website visit krenge tab request k saath ye string v jaegi aur backend match krega string available h ki nhi , agr available h toh user ko pehchan lega

// jo frontend pe browser me  store h use cookie kehte hai 
// aur jo is wkt hum server se connected h cookie ke base pe ise session kehte hai
//login se logout krne tk session keh lata hai



//-------------------------------------------------

const express = require('express'); // importing the express module

const app = express(); // express ki puri powers app k variable me aajati h 


app.use(express.json())// it makes json based data readable---to jab json data bhej rhe h postman se tb is line help se use read kr paate hai 
app.use(express.urlencoded({ extended:true})) // uar jab xww-encoded form m bhejte h postman se tb ye line use krte h read krne k lie

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


// server ko bheja tha plain text par server ko mila blob which is not directly readable ab is cheej ko handle karna pdega ki hum us blob ko waapas se readable kar ske