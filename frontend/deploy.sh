#!/bin/bash

echo "Iniciando o deploy do Frontend..."

set -e  # Faz o script parar em caso de erro

# Verificar se o container já está rodando e pará-lo
if [ "$(docker ps -q -f name=bp-frontend)" ]; then
    echo "Parando container existente..."
    docker stop bp-frontend
fi

# Verificar se o container existe (rodando ou parado) e removê-lo
if [ "$(docker ps -aq -f name=bp-frontend)" ]; then
    echo "Removendo container existente..."
    docker rm bp-frontend
fi

# Verificar se a imagem já existe e removê-la antes do build
if [ "$(docker images -q bp-frontend)" ]; then
    echo "Removendo imagem existente..."
    docker rmi bp-frontend
fi

# Construir a nova imagem do frontend
docker build -t bp-frontend .

# Rodar o novo container do frontend
docker run -d \
    --name bp-frontend \
    -p 80:80 \
    bp-frontend

echo "Frontend implantado com sucesso!"
