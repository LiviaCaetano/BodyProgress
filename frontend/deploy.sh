#!/bin/bash

echo "Iniciando o deploy do Frontend..."

set -e

# Construir a imagem do frontend
docker build -f Dockerfile -t bp-frontend .

# Parar e remover o container do frontend se ele estiver rodando
docker rm -f bp-frontend 2>/dev/null || true

# Criando a rede para o container caso não exista
docker network ls | grep -wq "bp-network" || docker network create bp-network

# Rodar o container do frontend
docker container run -d \
    --name bp-frontend \
    --network bp-network \
    -p 80:80 \
    bp-frontend

echo "Frontend implantado com sucesso!"
