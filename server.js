// const express = require("express");
// const app = express();
// require("dotenv").config()

// app.get('/api/get',(req,res) => {
//     res.send({message:"hello back to nodejs v2"})
// })



// app.get('/api/get_user_details',(req,res) => {
//     res.send({
//         user:{
//             name:"horas",
//             age:40,
//             contact:11995143947
//         },env:process.env.NAME
     
//     })
// });



// // app.listen(8000,()=> {
// //     console.log("listening to 8000");   
// // })



// app.listen(process.env.PORT,() => {
//     console.log("listening to 8000");
// })


const express = require("express");
const app = express();
require("dotenv").config();

// Estilos de formatação adicionados para destacar a sintaxe
const estilos = `
    background-color: #f0f0f0; /* Cor de fundo */
    color: #333; /* Cor do texto */
    font-size: 16px; /* Tamanho da fonte */
    padding: 20px; /* Espaçamento interno */
`;

app.get('/api/get', (req, res) => {
    res.send('<div style="' + estilos + '">hello back to nodejs v2</div>');
});

app.get('/api/get_user_details', (req, res) => {
    res.send(`
        <div style="${estilos}">
            <p>User Details:</p>
            <ul>
                <li>Name: horas</li>
                <li>Age: 40</li>
                <li>Contact: 11995143947</li>
            </ul>
            <p>Environment: ${process.env.NAME}</p>
        </div>
    `);
});

app.listen(process.env.PORT, () => {
    console.log("listening to 8000");
});
