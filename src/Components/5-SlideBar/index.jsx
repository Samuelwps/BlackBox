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
  Item,
} from "./styled.js";
import { motion } from "framer-motion";
import { FaBrain, FaUsers, FaMoneyBillWave, FaClock, FaBook } from "react-icons/fa";

// Importação de imagens
import image8 from "../../images/Ebooks/habitos_atomicos.webp";
import image9 from "../../images/Ebooks/poder_agora.webp";
import image5 from "../../images/Ebooks/mindset_temp.webp";
import emocionalPratica from "../../images/Ebooks/emocional_pratica.webp";
import inteligenciaEmocional from "../../images/Ebooks/inteligencia_emocional.webp";
import lideranca from "../../images/Ebooks/lideranca.webp";
import mestrePersuasao from "../../images/Ebooks/mestre_persuasao.webp";
import maximizePotencial from "../../images/Ebooks/maximize_potencial.webp";
import jogoInfinito from "../../images/Ebooks/jogo_infinito.webp";
import dinheiroFeliz from "../../images/Ebooks/dinheiro_feliz.webp";
import milMilhao from "../../images/Ebooks/mil_milhao.webp";
import fortunaAcoes from "../../images/Ebooks/fortuna_acoes.webp";
import fimProcrastinacao from "../../images/Ebooks/fim_procrastinacao.webp";
import produtivo from "../../images/Ebooks/produtivo.webp";
import rapidoDevagar from "../../images/Ebooks/rapido_devagar.webp";
import sapiens from "../../images/Ebooks/sapiens.webp";
import pensaEnriquece from "../../images/Ebooks/pensa_enriquece.webp";

// Função genérica para criar SlideBars
const SlideBar = ({ title, description, slides, icon: Icon, iconColor }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  const innerCarousel = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current && innerCarousel.current) {
        setWidth(innerCarousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };
    const resizeObserver = new ResizeObserver(updateWidth);
    carousel.current && resizeObserver.observe(carousel.current);
    innerCarousel.current && resizeObserver.observe(innerCarousel.current);
    updateWidth();
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <ContainerALl>
      <ContainerInLine>
        <Lines />
        <motion.div className="IconWrapper" animate={{ y: [-10, 10, -10] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <Icon size="3rem" color={iconColor} />
        </motion.div>
        <Lines />
      </ContainerInLine>
      <ContainerHeader>
        <h1>{title}</h1>
        <p>{description}</p>
      </ContainerHeader>
      <Container>
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
          <motion.div ref={innerCarousel} drag="x" dragConstraints={{ right: 0, left: -width }} dragElastic={0.1} className="inner">
            {slides.map((slide, index) => (
              <Item as={motion.div} className="item" key={index}>
                <img src={slide.image} alt={`Imagem ${index + 1}`} />
                <Button onClick={() => window.open(slide.link, "_blank")}>Acessar Link</Button>
              </Item>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </ContainerALl>
  );
};

// Dados para cada categoria
const personalDevelopmentSlides = [
  { image: image8, link: "https://black-box-nine.vercel.app" },
  { image: image9, link: "https://black-box-nine.vercel.app" },
  { image: image5, link: "https://black-box-nine.vercel.app" },
  { image: emocionalPratica, link: "https://black-box-nine.vercel.app" },
  { image: inteligenciaEmocional, link: "https://black-box-nine.vercel.app" },
];

const leadershipSlides = [
  { image: lideranca, link: "https://black-box-nine.vercel.app" },
  { image: mestrePersuasao, link: "https://black-box-nine.vercel.app" },
  { image: maximizePotencial, link: "https://black-box-nine.vercel.app" },
  { image: jogoInfinito, link: "https://black-box-nine.vercel.app" },
];

const financeSlides = [
  { image: dinheiroFeliz, link: "https://black-box-nine.vercel.app" },
  { image: milMilhao, link: "https://black-box-nine.vercel.app" },
  { image: fortunaAcoes, link: "https://black-box-nine.vercel.app" },
];

const productivitySlides = [
  { image: fimProcrastinacao, link: "https://black-box-nine.vercel.app" },
  { image: produtivo, link: "https://black-box-nine.vercel.app" },
  { image: rapidoDevagar, link: "https://black-box-nine.vercel.app" },
];

const otherSlides = [
  { image: sapiens, link: "https://black-box-nine.vercel.app" },
  { image: pensaEnriquece, link: "https://black-box-nine.vercel.app" },
];

// Exportação dos SlideBars
const SlideBars = () => {
  const sections = [
    { title: "Desenvolvimento Pessoal", description: "Transforme sua vida com hábitos e mentalidades poderosas.", slides: personalDevelopmentSlides, icon: FaBrain, iconColor: "#FF5733" },
    { title: "Liderança e Persuasão", description: "Aprenda a liderar e influenciar com maestria.", slides: leadershipSlides, icon: FaUsers, iconColor: "#3498DB" },
    { title: "Finanças e Negócios", description: "Domine suas finanças e conquiste o sucesso financeiro.", slides: financeSlides, icon: FaMoneyBillWave, iconColor: "#28A745" },
    { title: "Produtividade", description: "Aumente sua eficiência e alcance seus objetivos.", slides: productivitySlides, icon: FaClock, iconColor: "#FFC107" },
    { title: "Outros Interesses", description: "Explore temas fascinantes e expanda seu conhecimento.", slides: otherSlides, icon: FaBook, iconColor: "#6F42C1" },
  ];

  return sections.map((section, index) => (
    <SlideBar key={index} title={section.title} description={section.description} slides={section.slides} icon={section.icon} iconColor={section.iconColor} />
  ));
};

export default SlideBars;
