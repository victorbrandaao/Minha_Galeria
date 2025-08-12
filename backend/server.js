const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Habilita CORS para permitir que o frontend acesse o backend
app.use(cors());

// --- CORREÇÃO AQUI ---
// Serve os arquivos estáticos da pasta 'frontend'
// Isso fará com que o index.html seja a página principal
app.use(express.static(path.join(__dirname, "frontend")));

// Pasta onde as imagens serão salvas
const UPLOADS_FOLDER = "uploads";
if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER);
}

// Configuração do Multer para salvar arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Rota para servir as imagens estáticas dos uploads
app.use("/uploads", express.static(path.join(__dirname, UPLOADS_FOLDER)));

// Rota de Upload (POST)
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("Nenhum arquivo enviado.");
  }
  res.status(200).send(`Arquivo ${req.file.filename} enviado com sucesso.`);
});

// Rota para listar as imagens (GET)
app.get("/images", (req, res) => {
  fs.readdir(UPLOADS_FOLDER, (err, files) => {
    if (err) {
      return res.status(500).send("Não foi possível listar as imagens.");
    }
    // Filtra para garantir que não estamos enviando arquivos ocultos como .gitkeep
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );
    res.status(200).json(imageFiles);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
