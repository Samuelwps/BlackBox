// Importações
import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  ContainerALl,
  ContainerLine,
  Button,
  ContainerInLine,
  Lines,
  ContainerHeader
} from "./styled.js";
import { motion } from "framer-motion";
import { GiJigsawBox } from "react-icons/gi";

// Importação de imagens
import image1 from "../../images/Ebooks/48MinBook.png";
import image2 from "../../images/Ebooks/FBIMinBook.png";
import image3 from "../../images/Ebooks/FinaceiraMinBook.png";
import image4 from "../../images/Ebooks/PoderMinBook.png";
import image5 from "../../images/Ebooks/MindSet.png";
import image6 from "../../images/Ebooks/7Habitos.png";
import image7 from "../../images/Ebooks/ComoFazerAmigos.png";
import image8 from "../../images/Ebooks/HabitosAtomicos.png";
import image9 from "../../images/Ebooks/poderdoagora.png";
import image10 from "../../images/Ebooks/autoresponsabilidade.png";
import image11 from "../../images/Ebooks/RapidoDevagar.png";
import image12 from "../../images/Ebooks/HabitoMinBook.png";

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
  { image: image11, link: "https://black-box-nine.vercel.app" },
  { image: image12, link: "https://black-box-nine.vercel.app" },
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

    const resizeObserver = new ResizeObserver(updateWidth);
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
            className="inner"
            animate={{
              x: [0, -width, 0], // Movimento automático para esquerda e volta
            }}
            transition={{
              duration: 30, // Velocidade do movimento automático
              ease: "linear",
              repeat: Infinity, // Repetição infinita
            }}
          >
            {slideData.map((slide, index) => (
              <motion.div className="item" key={index}>
                <img src={slide.image} alt={`Imagem ${index + 1}`} />
                <Button onClick={() => handleClick(slide.link)}>
                  Acessar Link
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </ContainerALl>
  );
};

export default SlideBar;
