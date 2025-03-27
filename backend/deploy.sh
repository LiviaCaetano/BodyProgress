#!/bin/bash

echo "Iniciando o deploy do Backend..."

set -e
# Garantir que a rede 'bp-network' existe
docker network ls | grep -wq "bp-network" || docker network create bp-network

# Construir a imagem do backend
docker build -t bp-backend .

# Parar e remover o container do backend se ele estiver rodando
docker stop bp-backend || true
docker rm bp-backend || true

# Rodar o container do backend
docker run -d \
    --name bp-backend \
    --network bp-network \
    -p 8080:8080 \
    bp-backend

echo "Backend implantado com sucesso!"
