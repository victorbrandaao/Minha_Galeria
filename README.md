# Minha Galeria 🖼️

Este é um projeto de aprendizado para criar uma aplicação web completa, desde o desenvolvimento local até o deploy na nuvem, utilizando conceitos modernos de DevOps.

A aplicação "Minha Galeria" permite que os usuários façam upload de imagens e as visualizem em uma galeria dinâmica.

## ✨ Funcionalidades

* Upload de imagens com preview instantâneo.
* Galeria de imagens responsiva.
* Backend simples para lidar com o armazenamento de arquivos.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com um conjunto de tecnologias que são padrão na indústria de desenvolvimento de software e operações.

### **Aplicação**

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Backend:** Node.js com o framework Express.js
* **Manipulação de Uploads:** Multer
* **Controle de Acesso:** CORS

### **Infraestrutura & DevOps**

* **Containerização:** Docker
* **Infraestrutura como Código (IaC):** Terraform
* **Orquestração de Containers:** Kubernetes
* **Provedor de Nuvem (Exemplo):** Google Cloud Platform (GCP) com Google Kubernetes Engine (GKE)

## ⚙️ Como Executar Localmente

Para executar este projeto na sua máquina local, você precisará ter o [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/minha-galeria-app.git](https://github.com/seu-usuario/minha-galeria-app.git)
    cd minha-galeria-app
    ```

2.  **Construa a imagem Docker:**
    Este comando irá ler o `Dockerfile` e empacotar toda a aplicação em uma imagem.
    ```bash
    docker build -t minha-galeria .
    ```

3.  **Execute o container:**
    Este comando irá iniciar um container a partir da imagem que você acabou de criar, mapeando a porta 3000 do seu computador para a porta 3000 do container.
    ```bash
    docker run -p 3000:3000 --name galeria-app minha-galeria
    ```

4.  **Acesse a aplicação:**
    Abra o seu navegador e acesse [http://localhost:3000](http://localhost:3000). A aplicação "Minha Galeria" deverá estar funcionando!
