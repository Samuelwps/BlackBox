// Importações
import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  ContainerALl,
  ContainerLine,
  Button,
  ContainerInLine,
  Lines,
  ContainerHeader,
  Item
} from "./styled.js";
import { motion } from "framer-motion";
import { GiJigsawBox } from "react-icons/gi";

// Importação de imagens
import image1 from "../../images/Ebooks/48min.webp";
import image2 from "../../images/Ebooks/fbi.webp";
import image3 from "../../images/Ebooks/financeira.webp";
import image4 from "../../images/Ebooks/poder.webp";
import image5 from "../../images/Ebooks/mindset_temp.webp";
import image6 from "../../images/Ebooks/7habitos.webp";
import image7 from "../../images/Ebooks/amigos.webp";
import image8 from "../../images/Ebooks/habitos_atomicos.webp";
import image9 from "../../images/Ebooks/poder_agora.webp";
import image10 from "../../images/Ebooks/autoresponsabilidade.webp";
import rapidoDevagar from "../../images/Ebooks/rapido_devagar.webp";
import habito from "../../images/Ebooks/habito.webp";
import produtivo from "../../images/Ebooks/produtivo.webp";
import convencer90s from "../../images/Ebooks/convencer_90s.webp";
import dinheiroFeliz from "../../images/Ebooks/dinheiro_feliz.webp";
import milMilhao from "../../images/Ebooks/mil_milhao.webp";
import elonMusk from "../../images/Ebooks/elon_musk.webp";
import fortunaAcoes from "../../images/Ebooks/fortuna_acoes.webp";
import formigas from "../../images/Ebooks/formigas.webp";
import inteligenciaEmocional from "../../images/Ebooks/inteligencia_emocional.webp";
import emocionalPratica from "../../images/Ebooks/emocional_pratica.webp";
import lideranca from "../../images/Ebooks/lideranca.webp";
import mastersSex from "../../images/Ebooks/masters_sex.webp";
import maximizePotencial from "../../images/Ebooks/maximize_potencial.webp";
import mestrePersuasao from "../../images/Ebooks/mestre_persuasao.webp";
import caminhoRiqueza from "../../images/Ebooks/caminho_riqueza.webp";
import cerebroPerformance from "../../images/Ebooks/cerebro_performance.webp";
import fimProcrastinacao from "../../images/Ebooks/fim_procrastinacao.webp";
import jogoInfinito from "../../images/Ebooks/jogo_infinito.webp";
import ladoDificil from "../../images/Ebooks/lado_dificil.webp";
import loboWallStreet from "../../images/Ebooks/lobo_wallstreet.webp";
import principe from "../../images/Ebooks/principe.webp";
import problemaSeu from "../../images/Ebooks/problema_seu.webp";
import seteNiveis from "../../images/Ebooks/7_niveis.webp";
import segredosLobo from "../../images/Ebooks/segredos_lobo.webp";
import pensaEnriquece from "../../images/Ebooks/pensa_enriquece.webp";
import sapiens from "../../images/Ebooks/sapiens.webp";
import scrum from "../../images/Ebooks/scrum.webp";
import voceUniverso from "../../images/Ebooks/voce_universo.webp";

// Dados do carrossel
const slideData = [
  { image: image1, link: "https://black-box-nine.vercel.app" },
  { image: image2, link: "https://black-box-nine.vercel.app" },
  { image: image3, link: "https://black-box-nine.vercel.app" },
  { image: image4, link: "https://black-box-nine.vercel.app" },
  { image: image5, link: "https://black-box-nine.vercel.app" },
  { image: image6, link: "https://black-box-nine.vercel.app" },
  { image: image7, link: "https://black-box-nine.vercel.app" },
  { image: image8, link: "https://black-box-nine.vercel.app" },
  { image: image9, link: "https://black-box-nine.vercel.app" },
  { image: image10, link: "https://black-box-nine.vercel.app" },
  { image: rapidoDevagar, link: "https://black-box-nine.vercel.app" },
  { image: habito, link: "https://black-box-nine.vercel.app" },
  { image: produtivo, link: "https://black-box-nine.vercel.app" },
  { image: convencer90s, link: "https://black-box-nine.vercel.app" },
  { image: dinheiroFeliz, link: "https://black-box-nine.vercel.app" },
  { image: milMilhao, link: "https://black-box-nine.vercel.app" },
  { image: elonMusk, link: "https://black-box-nine.vercel.app" },
  { image: fortunaAcoes, link: "https://black-box-nine.vercel.app" },
  { image: formigas, link: "https://black-box-nine.vercel.app" },
  { image: inteligenciaEmocional, link: "https://black-box-nine.vercel.app" },
  { image: emocionalPratica, link: "https://black-box-nine.vercel.app" },
  { image: lideranca, link: "https://black-box-nine.vercel.app" },
  { image: mastersSex, link: "https://black-box-nine.vercel.app" },
  { image: maximizePotencial, link: "https://black-box-nine.vercel.app" },
  { image: mestrePersuasao, link: "https://black-box-nine.vercel.app" },
  { image: caminhoRiqueza, link: "https://black-box-nine.vercel.app" },
  { image: cerebroPerformance, link: "https://black-box-nine.vercel.app" },
  { image: fimProcrastinacao, link: "https://black-box-nine.vercel.app" },
  { image: jogoInfinito, link: "https://black-box-nine.vercel.app" },
  { image: ladoDificil, link: "https://black-box-nine.vercel.app" },
  { image: loboWallStreet, link: "https://black-box-nine.vercel.app" },
  { image: principe, link: "https://black-box-nine.vercel.app" },
  { image: problemaSeu, link: "https://black-box-nine.vercel.app" },
  { image: seteNiveis, link: "https://black-box-nine.vercel.app" },
  { image: segredosLobo, link: "https://black-box-nine.vercel.app" },
  { image: pensaEnriquece, link: "https://black-box-nine.vercel.app" },
  { image: sapiens, link: "https://black-box-nine.vercel.app" },
  { image: scrum, link: "https://black-box-nine.vercel.app" },
  { image: voceUniverso, link: "https://black-box-nine.vercel.app" },
];

// Componente SlideBar
const SlideBar = () => {
  const carousel = useRef(null);
  const innerCarousel = useRef(null);
  const [width, setWidth] = useState(0);

  // Atualiza a largura do carrossel
  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current && innerCarousel.current) {
        const scrollWidth = innerCarousel.current.scrollWidth;
        const offsetWidth = carousel.current.offsetWidth;
        setWidth(scrollWidth - offsetWidth);
      }
    };

    // Debounce para evitar cálculos excessivos
    const debounceUpdateWidth = () => {
      clearTimeout(updateWidth.timeout);
      updateWidth.timeout = setTimeout(updateWidth, 100);
    };

    const resizeObserver = new ResizeObserver(debounceUpdateWidth);
    if (carousel.current) resizeObserver.observe(carousel.current);
    if (innerCarousel.current) resizeObserver.observe(innerCarousel.current);

    updateWidth();

    return () => resizeObserver.disconnect();
  }, []);

  // Abre o link em uma nova aba
  const handleClick = link => {
    window.open(link, "_blank");
  };

  return (
    <ContainerALl>
      {/* Linha + Ícone flutuante */}
      <ContainerInLine>
        <Lines />
        <motion.div
          className="IconWrapper"
          animate={{
            y: [-10, 10, -10], // Movimento de sobe e desce
          }}
          transition={{
            duration: 1.5, // Duração do ciclo
            repeat: Infinity, // Repetição infinita
            ease: "easeInOut", // Suavização
          }}
        >
          <GiJigsawBox size="3rem" color="var(--White)" />
        </motion.div>
        <Lines />
      </ContainerInLine>
      <ContainerHeader>
        <h1>LEITURAS QUE MUDA O JOGO</h1>
        <p>Quer convencer, liderar ou vencer? Esses livros 
          são sua vantagem estratégica.
        </p>
        <span>Conhecimento direto, prático e poderoso — escolha <br/>agora e transforme sua 
          mente em uma arma de alta performance.
        </span>
      </ContainerHeader>
      {/* Carrossel */}
      <Container>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            ref={innerCarousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragElastic={0.1} // Suaviza o arraste
            className="inner"
            transition={{
              type: "spring", // Suavização ao soltar
              stiffness: 300,
              damping: 30,
            }}
          >
            {slideData.map((slide, index) => (
              <Item as={motion.div} className="item" key={index}>
                <img src={slide.image} alt={`Imagem ${index + 1}`} />
                <Button onClick={() => handleClick(slide.link)}>
                  Acessar Link
                </Button>
              </Item>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </ContainerALl>
  );
};

export default SlideBar;
