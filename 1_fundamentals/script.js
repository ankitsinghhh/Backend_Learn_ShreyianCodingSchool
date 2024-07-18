//Fundamentals of js
//arrays and objects
//functions return
//asyncjs coding

//array in js can hold collections of any type of data altogether
//foreach , map , filter , find ,indexof

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// //foEach
// arr.forEach( function(arrayItem){
//     console.log(arrayItem+ "-hello")
// } )

//map
//it returns a new array whose length is same as the one on which map is applied
// let newarr = arr.map( (item)=>{
// return item+10;
//     // return 10;
// })
// console.log(newarr)


//filter in array
//it also returns an array but it only has those elements which pass the condition
//the newarray length can be equal to previous array or less than previous array length

// let newarray=arr.filter(function(item){
//     // niche ka code easily smjha rha hai ki how filter works
//     // if(item>3){
//     //     return true
//     // }
//     // else{
//     //     return false
//     // }


// })
// console.log(newarray)


//find in array
// ye pehle bande ko dhund k deta h bs 
// let newarray = arr.find(function(item){
//     if(item==2){
//         return item
//     }
// })

// console.log(newarray)


//index of
// example : arr.indexof(3) gives 2 ,sly , for indexof(4)=>3 , indexof(20) -> -1 ,means not present in array


// #########Objects - > key value pairs +++++++++++++++++++++++++++

const abc = {
    name: "harsh",
    age: 26
}

//to access
// 1. -> abc.name
//2. -> abc['name']

//to change
// abc.name = "rahul"

//to avoid change by anyone
// Object.freeze(abc)


//------------------- functions -----------------------------
// they are object basically in js 
// they have key called length which stores the no. of arguments passed

// function abcd(){
//     return 12
// }

// console.log(abcd())


//==============================ASYNC JS ===============================

// synchronous -> when code executes line by line
//asynchronous -> jo v code aysnc nature ka hota h , use side stack me bhej do and agle code ko chlao jo v sync nature ka ho m jab v sara syn code chal jae , tab check kro ki async code complete hua ya nhi and agar wo complete hua ho toh use main stack me laao and chalao

// async function is a new way of writing JavaScript code that uses promises to handle async operations.

async function printres() {
    const response = await fetch(`https://randomuser.me/api/`) // response string/stream me aata hai 
    const data = await response.json() // jo response string/stream me aaya h use object m convert kr rhe hai
    console.log(data)
    console.log(data.results)
    console.log(data.results.length)
    console.log(data.results[0])
    console.log(data.results[0].name)
}

printres() // calling the function
