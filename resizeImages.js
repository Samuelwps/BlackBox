import fs from "fs";
import path from "path";
import sharp from "sharp";

// Caminho da pasta onde estão as imagens
const folderPath = path.join(process.cwd(), "src/images/Ebooks");

// Cria uma nova pasta para salvar as imagens redimensionadas
const outputFolder = path.join(folderPath, "resized");
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Lista os arquivos na pasta
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Erro ao ler a pasta:", err);
    return;
  }

  console.log("Arquivos encontrados:", files);

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const fileName = path.basename(file, ext);

    // Verifica se o arquivo é uma imagem válida
    if ([".png", ".jpg", ".jpeg", ".webp"].includes(ext)) {
      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(outputFolder, `${fileName}.webp`);

      // Redimensiona a imagem para 600x1000 pixels
      sharp(inputPath)
        .resize(600, 1000, { fit: "cover" })
        .toFile(outputPath)
        .then(() => {
          console.log(`Redimensionado com sucesso: ${file} -> ${fileName}.webp`);
        })
        .catch(err => {
          console.error(`Erro ao redimensionar ${file}:`, err);
        });
    } else {
      console.log(`Arquivo ignorado (não é uma imagem válida): ${file}`);
    }
  });
});
