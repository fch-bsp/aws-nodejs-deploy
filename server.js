const express = require("express");
const app = express();
//require("dotenv").config()

app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})



app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"horas",
            age:40,
            contact:122542585
            // ,env:process.env.NAME
        }
    })
});



app.listen(8000,()=> {
    console.log("listening to 8000");   
})



// app.listen(process.env.PORT,() => {
//     console.log("listening to 8000");
// })