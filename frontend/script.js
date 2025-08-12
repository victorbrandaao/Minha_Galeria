const uploadForm = document.getElementById("uploadForm");
const imageInput = document.getElementById("imageInput");
const gallery = document.getElementById("gallery");
const API_URL = "http://localhost:3000"; // Endereço do nosso backend

// Função para buscar e exibir as imagens
async function fetchImages() {
  try {
    const response = await fetch(`${API_URL}/images`);
    const images = await response.json();

    gallery.innerHTML = ""; // Limpa a galeria antes de adicionar novas imagens
    images.forEach((imageName) => {
      const imgElement = document.createElement("img");
      imgElement.src = `${API_URL}/uploads/${imageName}`;
      imgElement.alt = imageName;
      gallery.appendChild(imgElement);
    });
  } catch (error) {
    console.error("Erro ao buscar imagens:", error);
  }
}

// Lógica de upload
uploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("image", imageInput.files[0]);

  try {
    await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData,
    });
    // Após o upload, atualiza a galeria
    fetchImages();
    uploadForm.reset();
  } catch (error) {
    console.error("Erro no upload:", error);
  }
});

// Carrega as imagens iniciais quando a página é aberta
fetchImages();
