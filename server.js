const express = require("express");
const app = express();
require("dotenv").config();

const estilos = `
    background-color: #000;
    color: #fff;
    font-size: 16px;
    padding: 20px;
    text-align: center; /* Centralizar conteúdo */
`;

const videoEstilos = `
    width: 80%; /* Definir largura do vídeo */
    max-width: 800px; /* Definir largura máxima */
    margin: 0 auto; /* Centralizar vídeo */
`;

// Rota para exibir uma página com a imagem e o vídeo centralizados
app.get('/api/get_with_image_and_video', (req, res) => {
    res.send(`
        <div style="${estilos}">
            <p>Esta é Topologia: versão 002</p>
            <p>Implantar projeto Node.js na Amazon EC2 com GitHub Actions:</p>
            <img src="https://lab-ec2-ci-cd.s3.us-east-2.amazonaws.com/Top.png" alt="Imagem de exemplo">
            <p>Aqui está um vídeo mostrando passo-passo da aplicação utilizando GitHub Actions:</p>
            <video controls style="${videoEstilos}">
                <source src="https://lab-ec2-ci-cd.s3.us-east-2.amazonaws.com/2024-04-03+02-49-17.mp4" type="video/mp4">
                Seu navegador não suporta o elemento de vídeo.
            </video>
            <p>Trabalhando com Secrets and Variables PROD= .env: ${process.env.NAME}</p>
        </div>
    `);
});

app.listen(process.env.PORT, () => {
    console.log("Servidor está ouvindo na porta", process.env.PORT);
});




// versão 01


// const express = require("express");
// const app = express();
// require("dotenv").config();

// // Estilos de formatação adicionados para destacar a sintaxe
// const estilos = `
//     background-color: #000; /* Cor de fundo preto */
//     color: #fff; /* Cor do texto branco */
//     font-size: 16px; /* Tamanho da fonte */
//     padding: 20px; /* Espaçamento interno */
// `;
// // http://3.18.20.84/api
// app.get('/api/get', (req, res) => {
//     res.send('<div style="' + estilos + '">hello back to nodejs v2</div>');
// });

// //http://3.18.20.84/api/get_user_details
// app.get('/api/get_user_details', (req, res) => {
//     res.send(`
//         <div style="${estilos}">
//             <p>User Details:</p>
//             <ul>
//                 <li>Name:Fernando Carlos horas</li>
//                 <li>Idade: 43</li>
//                 <li>Contato: 11995143947</li>
//                 <li>Versão app: 001</li>                
//             </ul>
//             <p>.env: ${process.env.NAME}</p>
//         </div>
//     `);
// });

// app.listen(process.env.PORT, () => {
//     console.log("listening to 8000");
// });




