# 🛠️ 1° Estágio: Construção do Frontend (Node.js)
FROM node:18-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para instalar as dependências
COPY package.json package-lock.json ./

# Instala somente dependências de produção
RUN npm install

# Copia o restante do código do projeto
COPY . .

# Executa o build da aplicação
RUN CI=false npm run build

# Remove node_modules para reduzir o tamanho da imagem
RUN rm -rf node_modules

# 🏗️ 2° Estágio: Servindo com Nginx
FROM nginx:1.15.5-alpine

# Copia o arquivo de configuração do Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Remove arquivos antigos do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos gerados no primeiro estágio para o Nginx
COPY --from=builder /app/dist/ /usr/share/nginx/html

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
