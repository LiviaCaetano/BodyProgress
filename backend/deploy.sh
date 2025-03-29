#!/bin/bash

echo "Iniciando o deploy do Backend..."

set -e  # Faz o script parar em caso de erro

# Verificar se o container já está rodando e pará-lo
if [ "$(docker ps -q -f name=bp-backend)" ]; then
    echo "Parando container existente..."
    docker stop bp-backend
fi

# Verificar se o container existe (rodando ou parado) e removê-lo
if [ "$(docker ps -aq -f name=bp-backend)" ]; then
    echo "Removendo container existente..."
    docker rm bp-backend
fi

# Verificar se a imagem já existe e removê-la antes do build
if [ "$(docker images -q bp-backend)" ]; then
    echo "Removendo imagem existente..."
    docker rmi bp-backend
fi

# Construir a nova imagem do backend
docker build -t bp-backend .

# Rodar o novo container do backend
docker run -d \
    --name bp-backend \
    -p 8080:8080 \
    bp-backend

echo "Backend implantado com sucesso!"
