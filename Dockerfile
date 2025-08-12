# --- Estágio 1: Construir o Backend ---
FROM node:18-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependência e instala
COPY backend/package*.json ./
RUN npm install

# Copia o resto do código do backend
COPY backend/ ./

# --- Estágio 2: Imagem Final ---
FROM node:18-alpine

WORKDIR /app

# Copia as dependências já instaladas do estágio anterior
COPY --from=builder /app/node_modules ./node_modules
# Copia o código do backend
COPY --from=builder /app ./

# Copia o código do frontend para ser servido
# (Em uma aplicação real, o frontend poderia ser servido por um NGINX,
# mas para simplificar, vamos deixar tudo junto)
COPY frontend/ ./frontend

EXPOSE 3000

# Comando para iniciar o servidor
CMD [ "node", "server.js" ]
