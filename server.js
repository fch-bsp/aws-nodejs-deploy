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








// versão 01


const express = require("express");
const app = express();
require("dotenv").config();

// Estilos de formatação adicionados para destacar a sintaxe
const estilos = `
    background-color: #000; /* Cor de fundo preto */
    color: #fff; /* Cor do texto branco */
    font-size: 16px; /* Tamanho da fonte */
    padding: 20px; /* Espaçamento interno */
`;
// http://18.218.147.0/api
app.get('/api/get', (req, res) => {
    res.send('<div style="' + estilos + '">hello back to nodejs v2</div>');
});

//http://18.218.147.0/api/get_user_details
app.get('/api/get_user_details', (req, res) => {
    res.send(`
        <div style="${estilos}">
            <p>User Details:</p>
            <ul>
                <li>Name:Fernando Carlos horas</li>
                <li>Idade: 40</li>
                <li>Contato: 11995143947</li>
                <li>Versão app: 003</li>                
            </ul>
            <p>.env: ${process.env.NAME}</p>
        </div>
    `);
});

app.listen(process.env.PORT, () => {
    console.log("listening to 8000");
});




// versão 02

// const express = require("express");
// const app = express();
// require("dotenv").config();

// // Estilos de formatação adicionados para destacar a sintaxe
// const estilos = `
//     background-color: #f0f0f0; /* Cor de fundo */
//     color: #333; /* Cor do texto */
//     font-size: 16px; /* Tamanho da fonte */
//     padding: 20px; /* Espaçamento interno */
// `;

// app.get('/api/get', (req, res) => {
//     res.send('<div style="' + estilos + '">hello back to nodejs v2</div>');
// });

// app.get('/api/get_user_details', (req, res) => {
//     res.send(`
//         <div style="${estilos}">
//             <p>User Details:</p>
//             <ul>
//                 <li>Name: horas</li>
//                 <li>Age: 40</li>
//                 <li>Contact: 11995143947</li>
//             </ul>
//             <p>Environment: ${process.env.NAME}</p>
//             <li>Versao app: 0001</li>
//         </div>
//     `);
// });

// app.listen(process.env.PORT, () => {
//     console.log("listening to 8000");
// });
