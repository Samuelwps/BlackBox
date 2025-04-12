// import fs from "fs";
// import path from "path";

// // Caminho da pasta onde estão os arquivos
// const folderPath = path.join(process.cwd(), "src/images/Ebooks");

// // Verifica o caminho da pasta
// console.log("Caminho da pasta:", folderPath);

// // Lista os arquivos na pasta
// fs.readdir(folderPath, (err, files) => {
//   if (err) {
//     console.error("Erro ao ler a pasta:", err);
//     return;
//   }
//   console.log("Arquivos na pasta:", files);

//   // Mapeamento de nomes antigos para novos
//   const fileNames = [
//   { old: "48MinBook.webp", new: "48min.webp" },
//   { old: "FBIMinBook.webp", new: "fbi.webp" },
//   { old: "FinaceiraMinBook.webp", new: "financeira.webp" },
//   { old: "PoderMinBook.webp", new: "poder.webp" },
//   { old: "MindSet.webp", new: "mindset.webp" },
//   { old: "7Habitos.webp", new: "7habitos.webp" },
//   { old: "ComoFazerAmigos.webp", new: "amigos.webp" },
//   { old: "HabitosAtomicos.webp", new: "habitos_atomicos.webp" },
//   { old: "poderdoagora.webp", new: "poder_agora.webp" },
//   { old: "autoresponsabilidade.webp", new: "autoresponsabilidade.webp" },
//   { old: "RapidoDevagar.webp", new: "rapido_devagar.webp" },
//   { old: "HabitoMinBook.webp", new: "habito.webp" },
//   { old: "COMO SE TORNAR MAIS PRODUTIVO - Ismar Souza.png", new: "produtivo.png" },
//   { old: "Como_convencer_alguém_em_90_segundos_by_Nicholas_Boothman_z_lib_page0_image.png", new: "convencer_90s.png" },
//   { old: "Dinheiro feliz - Ken Honda_page0_image.png", new: "dinheiro_feliz.png" },
//   { old: "Do_mil_ao_milhão_Sem_cortar_o_cafezinho_by_Thiago_Nigro_z_lib_org_page0_image.png", new: "mil_milhao.png" },
//   { old: "Elon Musk Como o CEO bilionário da SpaceX_page0_image.png", new: "elon_musk.png" },
//   { old: "Faça fortuna com ações_page0_image.png", new: "fortuna_acoes.png" },
//   { old: "Formigas - William Douglas & Davi Lago_page0_image.png", new: "formigas.png" },
//   { old: "Inteligência emocional um guia prático_page0_image.png", new: "inteligencia_emocional.png" },
//   { old: "Inteligência_Emocional_Na_Prática_Aprenda_A_Desenv_page0_image.png", new: "emocional_pratica.png" },
//   { old: "Liderança_(Alex_Ferguson_M_(Z-Library)_page0_image.png", new: "lideranca.png" },
//   { old: "Masters of Sex - Thomas Maier_page0_image.png", new: "masters_sex.png" },
//   { old: "Maximize Seu Potencial -Myles-Munroe_page0_image.png", new: "maximize_potencial.png" },
//   { old: "Mestre da Persuasão_(1)_page0_image.png", new: "mestre_persuasao.png" },
//   { old: "O Caminho Simples para a Riqueza J. L.png", new: "caminho_riqueza.png" },
//   { old: "O Cerebro de Alta Performance - Luiz Fernando Garcia_page0_image.png", new: "cerebro_performance.png" },
//   { old: "O fim da procrastinação - Petr Ludwig_page0_image.png", new: "fim_procrastinacao.png" },
//   { old: "O jogo infinito - Simon Sinek_page0_image.png", new: "jogo_infinito.png" },
//   { old: "O lado difícil das situações difíceis_page0_image.png", new: "lado_dificil.png" },
//   { old: "O Lobo de Wall Street_page0_image.png", new: "lobo_wallstreet.png" },
//   { old: "O Principe_(comentarios_de_Napo_-_Nicolau_Maquiavel_(1)_page0_image.png", new: "principe.png" },
//   { old: "O Problema é seu - Tiago Brunet_page0_image.png", new: "problema_seu.png" },
//   { old: "Os 7 níveis da consciência_page0_image.png", new: "7_niveis.png" },
//   { old: "Os Segredos do Lobo_page0_image.png", new: "segredos_lobo.png" },
//   { old: "Quem_pensa_enriquece_Edição_oficial_e_original_de_1937_Napoleon_page0_image.png", new: "pensa_enriquece.png" },
//   { old: "SAPIENS - UMA BREVE HISTÓRIA DA HUMANIDADE_page0_image.png", new: "sapiens.png" },
//   { old: "Scrum - a arte de fazer o dobro - Jeff Sutherland_page0_image.png", new: "scrum.png" },
//   { old: "Você é o universo - Deepak Chopra_page0_image.png", new: "voce_universo.png" },
// ];

//   // Renomeia os arquivos
//   fileNames.forEach(({ old, new: newName }) => {
//     const oldPath = path.join(folderPath, old);
//     const newPath = path.join(folderPath, newName);

//     fs.rename(oldPath, newPath, err => {
//       if (err) {
//         console.error(`Erro ao renomear ${old} para ${newName}:`, err);
//       } else {
//         console.log(`Renomeado: ${old} -> ${newName}`);
//       }
//     });
//   });
// });
