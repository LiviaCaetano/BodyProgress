# Etapa 1: Construir a aplicação
FROM node:18-alpine AS build

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e o package-lock.json para instalar as dependências
COPY package.json .
COPY package-lock.json .

# Instalar as dependências
RUN npm install

# Copiar o código fonte do frontend
COPY . .

# Rodar o build para gerar os arquivos estáticos de produção
RUN npm run build

# Etapa 2: Servir a aplicação com Nginx
FROM nginx:alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copiar os arquivos de build para o diretório de serve do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80 para acessar o frontend
EXPOSE 80

# O Nginx serve a aplicação automaticamente
CMD ["nginx", "-g", "daemon off;"]
