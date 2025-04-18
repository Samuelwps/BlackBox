import fs from "fs";
import path from "path";

// Função pra simplificar nome dos arquivos
function simplifyFileName(fileName) {
  return fileName
    .normalize("NFD") // remove acentos
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-zA-Z0-9]/g, "_") // troca caracteres por "_"
    .replace(/_+/g, "_") // evita múltiplos underlines
    .replace(/^_+|_+$/g, "") // tira underlines do começo e do fim
    .toLowerCase();
}

const folderPath = path.join(process.cwd(), "src/images/Ebooks");

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Erro ao ler a pasta:", err);
    return;
  }

  files.forEach(file => {
    const oldPath = path.join(folderPath, file);
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const newName = simplifyFileName(baseName) + ext.toLowerCase();
    const newPath = path.join(folderPath, newName);

    if (oldPath === newPath) return; // já está com nome simples

    fs.rename(oldPath, newPath, err => {
      if (err) {
        console.error(`Erro ao renomear ${file} para ${newName}:`, err);
      } else {
        console.log(`Renomeado: ${file} -> ${newName}`);
      }
    });
  });
});
