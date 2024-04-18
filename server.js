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
            <p>Esta é Topologia: versão 003</p>
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




