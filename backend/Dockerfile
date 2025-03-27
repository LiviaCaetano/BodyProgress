# Etapa 1: Construir a aplicação
FROM jelastic/maven:3.9.5-openjdk-22.ea-b19 AS build

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo pom.xml e o diretório src
COPY pom.xml .
COPY src ./src

# Rodar o Maven para compilar o projeto
RUN mvn clean package -DskipTests

# Etapa 2: Rodar a aplicação
FROM openjdk:22-jdk

# Diretório de trabalho no container
WORKDIR /app

# Copiar o JAR da etapa de construção, renomeando para backend.jar
COPY --from=build /app/target/*.jar /app/backend.jar

# Expor a porta onde o backend estará rodando
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["java", "-jar", "backend.jar"]
