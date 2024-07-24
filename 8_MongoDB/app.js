// mongoose -> ye help krta hai hmare node ke server ko mongodb k server se baatcheet krane me 
// basically ye help krta hai application server aur database server k bich me communication krne ka 

//------------------------------CRUD Operations --------------------


const express = require('express'); //import the express module
const app = express(); //creating instance of express

const userModel = require('./usermodel')

app.get('/',(req,res)=>{
    res.send("hey")
}) // agr koi root path ko get krne ki kosis krega toh use response me "hey" send hoga

app.get('/create',async (req,res)=>{
    let createdUser = await userModel.create(
        {
          name:"harshita",
          email:"harshita@gmail.com",
          username:"harshita"
        }
      )

    res.send(createdUser)
}) 

app.get('/update',async (req,res)=>{
    
    let updateduser = await userModel.findOneAndUpdate({username:"harsh"}, {name:"rahul thakur admin"},{new:true})

    res.send(updateduser)
}) 

app.get("/read",async function(req,res){
    // let users = await userModel.find() // to read all data 
    // let oneuser = await userModel.findOne({username:"harsh"}) // to read a particular data

    let users = await userModel.find()
    res.send(users)

    //NOTE: when no user -> findOne gives null , while find gives a empty array

})

app.get('/delete',async (req,res)=>{
    let users = await userModel.findOneAndDelete({username:"harsh"})
    res.send(users)
})



app.listen(3000)