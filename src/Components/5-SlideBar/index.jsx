// Importações de bibliotecas
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaUsers,
  FaMoneyBillWave,
  FaClock,
  FaBook,
  FaLock,
} from "react-icons/fa";

// Importações de estilos
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

// Importações de imagens
import image7 from "../../images/Ebooks/amigos.webp";
import image10 from "../../images/Ebooks/responsabilidade.webp";
import caminhoRiqueza from "../../images/Ebooks/caminho_riqueza.webp";
import cerebroPerformance from "../../images/Ebooks/o_cerebro.webp";
import convencer90s from "../../images/Ebooks/convencer_90s.webp";
import dinheiroFeliz from "../../images/Ebooks/dinheiro_feliz.webp";
import elonMusk from "../../images/Ebooks/elon_musk.webp";
import emocionalPratica from "../../images/Ebooks/inteligencia_emocional.webp";
import fimProcrastinacao from "../../images/Ebooks/fim_procastinyacao.webp";
import formigas from "../../images/Ebooks/formigas.webp";
import fortunaAcoes from "../../images/Ebooks/faca_fortunas_com_acoes.webp";
import habito from "../../images/Ebooks/o_poder_do_habito.webp";
import image8 from "../../images/Ebooks/habitos_atomicos.webp";
import image5 from "../../images/Ebooks/mindset.webp";
import image9 from "../../images/Ebooks/o_poder_do_agora.webp";
import jogoInfinito from "../../images/Ebooks/o_jogo_infinito.webp";
import ladoDificil from "../../images/Ebooks/o_lado_dificil_da_situacao.webp";
import lideranca from "../../images/Ebooks/alexandre_fergurson.png";
import loboWallStreet from "../../images/Ebooks/o_lobo_alsstret.webp";
import mastersSex from "../../images/Ebooks/sex.png";
import maximizePotencial from "../../images/Ebooks/myles_munroe.webp";
import mestrePersuasao from "../../images/Ebooks/mestre_da_persuasao.webp";
import milMilhao from "../../images/Ebooks/mil_ao_milhao.webp";
import pensaEnriquece from "../../images/Ebooks/quem_pensa_enriquece.webp";
import principe from "../../images/Ebooks/o_principe.webp";
import problemaSeu from "../../images/Ebooks/o_problema_e_seu.webp";
import produtivo from "../../images/Ebooks/como_ser_mais_produtivo.webp";
import rapidoDevagar from "../../images/Ebooks/rapido_e_devagar.webp";
import sapiens from "../../images/Ebooks/sapiens.webp";
import scrum from "../../images/Ebooks/scrum.webp";
import segredosLobo from "../../images/Ebooks/os_segredos_lobos.webp";
import seteNiveis from "../../images/Ebooks/7_niveis.png";
import voceUniverso from "../../images/Ebooks/voce_e_universo.png";

// Função genérica para criar SlideBars
const SlideBar = ({ title, description, slides, icon: Icon, iconColor }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  const innerCarousel = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current && innerCarousel.current) {
        setWidth(
          innerCarousel.current.scrollWidth - carousel.current.offsetWidth
        );
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
        <motion.div
          className="IconWrapper"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon size="3rem" color={iconColor} />
        </motion.div>
        <Lines />
      </ContainerInLine>
      <ContainerHeader>
        <h1>{title}</h1>
        <p>{description}</p>
      </ContainerHeader>
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
            dragElastic={0.1}
            className="inner"
          >
            {slides.map((slide, index) => (
              <Item as={motion.div} className="item" key={index}>
                <img src={slide.image} alt={`Imagem ${index + 1}`} />
                <Button
                  disabled
                  style={{
                    cursor: "not-allowed",
                    opacity: 0.6,
                    backgroundColor: "#ccc",
                    color: "#555",
                  }}
                >
                  <FaLock style={{ marginRight: "0.5rem" }} />
                  Disponível em breve
                </Button>
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
  { image: image8, link: "https://black-box-nine.vercel.app" }, // Hábitos Atômicos
  { image: image9, link: "https://black-box-nine.vercel.app" }, // O Poder do Agora
  { image: image5, link: "https://black-box-nine.vercel.app" }, // Mindset
  { image: emocionalPratica, link: "https://black-box-nine.vercel.app" }, // Inteligência Emocional na Prática
  { image: image7, link: "https://black-box-nine.vercel.app" }, // Como Fazer Amigos
  { image: image10, link: "https://black-box-nine.vercel.app" }, // Autorresponsabilidade
  { image: habito, link: "https://black-box-nine.vercel.app" }, // O Poder do Hábito
];

const leadershipSlides = [
  { image: lideranca, link: "https://black-box-nine.vercel.app" }, // Liderança
  { image: mestrePersuasao, link: "https://black-box-nine.vercel.app" }, // Mestre da Persuasão
  { image: maximizePotencial, link: "https://black-box-nine.vercel.app" }, // Maximize Seu Potencial
  { image: jogoInfinito, link: "https://black-box-nine.vercel.app" }, // O Jogo Infinito
  { image: convencer90s, link: "https://black-box-nine.vercel.app" }, // Como Convencer em 90 Segundos
  { image: caminhoRiqueza, link: "https://black-box-nine.vercel.app" }, // O Caminho para a Riqueza
  { image: principe, link: "https://black-box-nine.vercel.app" }, // O Príncipe
];

const financeSlides = [
  { image: dinheiroFeliz, link: "https://black-box-nine.vercel.app" }, // Dinheiro Feliz
  { image: milMilhao, link: "https://black-box-nine.vercel.app" }, // Do Mil ao Milhão
  { image: fortunaAcoes, link: "https://black-box-nine.vercel.app" }, // Fortuna em Ações
  { image: elonMusk, link: "https://black-box-nine.vercel.app" }, // Elon Musk
  { image: formigas, link: "https://black-box-nine.vercel.app" }, // A Estratégia das Formigas
  { image: cerebroPerformance, link: "https://black-box-nine.vercel.app" }, // Cérebro e Alta Performance
  { image: ladoDificil, link: "https://black-box-nine.vercel.app" }, // O Lado Difícil das Situações Difíceis
  { image: loboWallStreet, link: "https://black-box-nine.vercel.app" }, // O Lobo de Wall Street
  { image: segredosLobo, link: "https://black-box-nine.vercel.app" }, // Os Segredos do Lobo
];

const productivitySlides = [
  { image: fimProcrastinacao, link: "https://black-box-nine.vercel.app" }, // O Fim da Procrastinação
  { image: produtivo, link: "https://black-box-nine.vercel.app" }, // Produtivo
  { image: rapidoDevagar, link: "https://black-box-nine.vercel.app" }, // Rápido e Devagar
  { image: scrum, link: "https://black-box-nine.vercel.app" }, // Scrum
  { image: seteNiveis, link: "https://black-box-nine.vercel.app" }, // Os 7 Níveis
];

const otherSlides = [
  { image: sapiens, link: "https://black-box-nine.vercel.app" }, // Sapiens
  { image: pensaEnriquece, link: "https://black-box-nine.vercel.app" }, // Pense e Enriqueça
  { image: problemaSeu, link: "https://black-box-nine.vercel.app" }, // O Problema é Seu
  { image: voceUniverso, link: "https://black-box-nine.vercel.app" }, // Você é o Universo
  { image: mastersSex, link: "https://black-box-nine.vercel.app" }, // Masters of Sex
];

// Exportação dos SlideBars
const SlideBars = () => {
  const sections = [
    {
      title: "Desenvolvimento Pessoal",
      description: "Transforme sua vida com hábitos e mentalidades poderosas.",
      slides: personalDevelopmentSlides,
      icon: FaBrain,
      iconColor: "#FF5733",
    },
    {
      title: "Liderança e Persuasão",
      description: "Aprenda a liderar e influenciar com maestria.",
      slides: leadershipSlides,
      icon: FaUsers,
      iconColor: "#3498DB",
    },
    {
      title: "Finanças e Negócios",
      description: "Domine suas finanças e conquiste o sucesso financeiro.",
      slides: financeSlides,
      icon: FaMoneyBillWave,
      iconColor: "#28A745",
    },
    {
      title: "Produtividade",
      description: "Aumente sua eficiência e alcance seus objetivos.",
      slides: productivitySlides,
      icon: FaClock,
      iconColor: "#FFC107",
    },
    {
      title: "Outros Interesses",
      description: "Explore temas fascinantes e expanda seu conhecimento.",
      slides: otherSlides,
      icon: FaBook,
      iconColor: "#6F42C1",
    },
  ];

  return sections.map((section, index) => (
    <SlideBar
      key={index}
      title={section.title}
      description={section.description}
      slides={section.slides}
      icon={section.icon}
      iconColor={section.iconColor}
    />
  ));
};

export default SlideBars;
