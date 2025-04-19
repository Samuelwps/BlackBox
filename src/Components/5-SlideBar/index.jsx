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
  {
    image: "/images/Ebooks/HABITOS_ATOMICOS.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/O_PODER_DO_AGORA.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/MINDSET.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/INTELIGENCIA_EMOCIONAL.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/amigos.webp",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/autoresponsabilidade.webp",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/O_PODER_DO_HABITO.png",
    link: "https://black-box-nine.vercel.app",
  },
];

const leadershipSlides = [
  {
    image: "/images/Ebooks/ALEXANDRE_FERGURSON.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/MESTRE_DA_PERSUASAO.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/O_JOGO_INFINITO.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/convencer_90s.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/caminho_riqueza.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/O_PRINCIPE.png",
    link: "https://black-box-nine.vercel.app",
  },
];

const financeSlides = [
  {
    image: "/images/Ebooks/dinheiro_feliz.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/MIL_AO_MILHAO.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/FAÇA_FORTUNAS_COM_AÇOES.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/ELON_MUSK.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/FORMIGAS.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/o_cerebro.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/O_LADO_DIFICIL_DA_SITUAÇAO.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/O_LOBO_ALSSTRET.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/OS_SEGREDOS_LOBOS.png",
    link: "https://black-box-nine.vercel.app",
  },
];

const productivitySlides = [
  {
    image: "/images/Ebooks/FIM_PROCASTINACAO.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/COMO_SER_MAIS_PRODUTIVO.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/RAPIDO_E_DEVAGAR.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/SCRUM.png",
    link: "https://black-box-nine.vercel.app",
  },
];

const otherSlides = [
  {
    image: "/images/Ebooks/SAPIENS.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/QUEM_PENSA_ENRIQUECE.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/O_PROBLEMA_e_SEU.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/VOCE_E_UNIVERSO.png",
    link: "https://black-box-nine.vercel.app",
  },
  {
    image: "/images/Ebooks/SEX.png",
    link: "https://black-box-nine.vercel.app",
  },
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
