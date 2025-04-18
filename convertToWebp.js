import fs from "fs";
import path from "path";
import sharp from "sharp";

// Caminho da pasta onde estão as imagens
const folderPath = path.join(process.cwd(), "src/images/Ebooks");

// Cria uma nova pasta para salvar as imagens convertidas
const outputFolder = path.join(folderPath, "converted");
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Função recursiva para processar pastas e subpastas
function processFolder(folder, relativePath = "") {
  fs.readdir(folder, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error("Erro ao ler a pasta:", err);
      return;
    }

    entries.forEach(entry => {
      const entryPath = path.join(folder, entry.name);
      const entryRelativePath = path.join(relativePath, entry.name);

      if (entry.isDirectory()) {
        // Processa subpastas
        processFolder(entryPath, entryRelativePath);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        const fileName = path.basename(entry.name, ext);

        // Verifica se o arquivo é uma imagem válida
        if ([".png", ".jpg", ".jpeg", ".webp"].includes(ext)) {
          const outputDir = path.join(outputFolder, relativePath);
          const outputPath = path.join(outputDir, `${fileName}.webp`);

          // Cria a subpasta correspondente, se necessário
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }

          // Converte a imagem para .webp
          sharp(entryPath)
            .webp({ quality: 80 })
            .toFile(outputPath)
            .then(() => {
              console.log(
                `Convertido com sucesso: ${entry.name} -> ${fileName}.webp`
              );
            })
            .catch(err => {
              console.error(`Erro ao converter ${entry.name}:`, err);
            });
        } else {
          console.log(
            `Arquivo ignorado (não é uma imagem válida): ${entry.name}`
          );
        }
      }
    });
  });
}

// Inicia o processamento a partir da pasta principal
processFolder(folderPath);
