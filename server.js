import express from "express";
import path from "path";

const app = express();
const PORT = 3001;

// Servir arquivos estáticos da pasta "downloads"
app.use("/downloads", express.static(path.join(process.cwd(), "downloads")));

// Rota principal
app.get("/", (req, res) => {
  res.send("Servidor rodando! Use /downloads para acessar os arquivos.");
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
