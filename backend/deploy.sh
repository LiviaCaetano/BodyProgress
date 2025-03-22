#!/bin/bash

# Função para realizar o deploy do backend
deploy() {
    echo "Iniciando o deploy do Backend..."

    # Construir a imagem do backend
    docker build -t bp-backend .

    # Parar o container do backend se estiver rodando
    docker stop bp-backend || true
    docker rm bp-backend || true

    # Rodar o container do backend
    docker run -d \
        --name bp-backend \
        --network bp-network \
        -p 8080:8080 \
        bp-backend

    echo "Backend implantado com sucesso!"
}

# Função para verificar se o Docker está rodando
check_docker() {
    if ! command -v docker &> /dev/null
    then
        echo "Docker não encontrado. Por favor, instale o Docker antes de continuar."
        exit 1
    fi

    if ! docker info &> /dev/null
    then
        echo "Docker não está rodando. Inicie o Docker antes de continuar."
        exit 1
    fi
}

# Verificar se o Docker está instalado e rodando
check_docker

# Iniciar o deploy do backend
deploy
