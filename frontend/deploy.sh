#!/bin/bash

# Função para realizar o deploy do frontend
deploy() {
    echo "Iniciando o deploy do Frontend..."

    # Construir a imagem do frontend
    docker build -t bp-frontend .

    # Parar o container do frontend se estiver rodando
    docker stop bp-frontend || true
    docker rm bp-frontend || true

    # Rodar o container do frontend
    docker run -d \
        --name bp-frontend \
        --network bp-network \
        -p 80:80 \
        bp-frontend

    echo "Frontend implantado com sucesso!"
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

# Iniciar o deploy do frontend
deploy
