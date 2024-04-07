# Use a imagem oficial do Node.js como base
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install

# Copie o restante dos arquivos da sua aplicação
COPY . .

# Instale globalmente o PM2
RUN npm install pm2 -g

# Exponha a porta em que o servidor Node.js está escutando
EXPOSE 8000

# Comando para iniciar a aplicação utilizando PM2 em modo cluster
CMD ["pm2-runtime", "start", "server.js", "--name", "backend", "-i", "3"]
