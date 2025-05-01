// Importações de bibliotecas
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaUsers,
  FaMoneyBillWave,
  FaClock,
  FaBook,
  FaArrowRight,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
  NavigationArrow,
} from "./styled.js";

// Função genérica para criar SlideBars
const SlideBar = ({ title, description, slides, icon: Icon, iconColor }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  const innerCarousel = useRef(null);
  const carouselRef = useRef(null);

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

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

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
                  className="custom-button"
                  onClick={() => window.open(slide.link, "_blank")}
                >
                  <span className="button-text">
                    <FaArrowRight style={{ marginRight: "0.5rem" }} />
                    Acessar Ebook
                  </span>
                </Button>
              </Item>
            ))}
          </motion.div>
        </motion.div>
        <NavigationArrow className="left" onClick={scrollLeft}>
          <IoIosArrowBack size={24} />
        </NavigationArrow>
        <NavigationArrow className="right" onClick={scrollRight}>
          <IoIosArrowForward size={24} />
        </NavigationArrow>
      </Container>
    </ContainerALl>
  );
};

// Dados para cada categoria
const personalDevelopmentSlides = [
  {
    image: "/images/Ebooks/HABITOS_ATOMICOS.webp",
    link: "https://pay.kirvano.com/24d506c9-1c87-4cfb-9f0d-cd73c1fbad44",
  },
  {
    image: "/images/Ebooks/O_PODER_DO_AGORA.webp",
    link: "https://pay.kirvano.com/d67d6952-b747-45b8-a048-7294bef5acab",
  },
  {
    image: "/images/Ebooks/MINDSET.webp",
    link: "https://pay.kirvano.com/f0c1ad96-af18-49e7-a069-460019d129c4",
  },
  {
    image: "/images/Ebooks/INTELIGENCIA_EMOCIONAL.webp",
    link: "https://pay.kirvano.com/f474f332-404d-457d-9fd3-47fe8ae7ca54",
  },
  {
    image: "/images/Ebooks/amigos.webp",
    link: "https://pay.kirvano.com/92e844c2-fbdb-451b-b9c0-dede4f7dc222",
  },
  // {
  //   image: "/images/Ebooks/autoresponsabilidade.webp",
  //   link: "https://black-box-nine.vercel.app",
  // },
  // {
  //   image: "/images/Ebooks/O_PODER_DO_HABITO.webp",
  //   link: "https://black-box-nine.vercel.app",
  // },
];

const leadershipSlides = [
  {
    image: "/images/Ebooks/ALEXANDRE_FERGURSON.webp",
    link: "https://pay.kirvano.com/9760e10e-f2e8-401a-a740-cab45b797e62",
  },
  {
    image: "/images/Ebooks/MESTRE_DA_PERSUASAO.webp",
    link: "https://pay.kirvano.com/b1fe86aa-fb66-4460-8c7a-7a523d133db8",
  },
  {
    image: "/images/Ebooks/O_JOGO_INFINITO.webp",
    link: "https://pay.kirvano.com/869a3028-14a8-454a-a83d-9a6be57818c1",
  },
  {
    image: "/images/Ebooks/convencer_90s.webp",
    link: "https://pay.kirvano.com/7e674dea-a17b-4bfa-8a24-2e5755dee948",
  },
  {
    image: "/images/Ebooks/caminho_riqueza.webp",
    link: "https://pay.kirvano.com/8c629840-7a2d-4dbb-83bf-d58e777758d2",
  },
  {
    image: "/images/Ebooks/O_PRINCIPE.webp",
    link: "https://pay.kirvano.com/c27e23f6-772d-4ce9-b45f-f64f6861e966",
  },
];

const financeSlides = [
  {
    image: "/images/Ebooks/dinheiro_feliz.webp",
    link: "https://pay.kirvano.com/fa776e58-b66a-45df-bf96-2e0cc1719cd3",
  },
  {
    image: "/images/Ebooks/MIL_AO_MILHAO.webp",
    link: "https://pay.kirvano.com/be71d921-f905-4229-aa78-d31e94c096c7",
  },
  {
    image: "/images/Ebooks/FAÇA_FORTUNAS_COM_AÇOES.webp",
    link: "https://pay.kirvano.com/92ef2e7e-22f3-4607-a96d-f511be8a5b00",
  },
  {
    image: "/images/Ebooks/ELON_MUSK.webp",
    link: "https://pay.kirvano.com/ff4432f9-c757-4e1a-8537-ff1a08ce5a7d",
  },
  {
    image: "/images/Ebooks/FORMIGAS.webp",
    link: "https://pay.kirvano.com/ea0d2044-1072-4691-85b8-ca8ba034eb4b",
  },
  {
    image: "/images/Ebooks/o_cerebro.webp",
    link: "https://pay.kirvano.com/ec55f6db-ecc4-4822-a1c2-dfeee0cae7f2",
  },
  {
    image: "/images/Ebooks/O_LADO_DIFICIL_DA_SITUAÇAO.webp",
    link: "https://pay.kirvano.com/315600f4-a766-4526-a71e-2302c07d13d6",
  },
  {
    image: "/images/Ebooks/O_LOBO_ALSSTRET.webp",
    link: "https://pay.kirvano.com/82d0016d-6476-4b3e-b72e-be40c4d9e0f5",
  },
  {
    image: "/images/Ebooks/OS_SEGREDOS_LOBOS.webp",
    link: "https://pay.kirvano.com/35ad62c4-0b5d-48e3-8f7d-088bc48981d2",
  },
];

const productivitySlides = [
  {
    image: "/images/Ebooks/FIM_PROCASTINACAO.webp",
    link: "https://pay.kirvano.com/a967b7d0-9458-4c6e-8228-3720a2e19972",
  },
  {
    image: "/images/Ebooks/COMO_SER_MAIS_PRODUTIVO.webp",
    link: "https://pay.kirvano.com/c198fa1b-56d6-47e3-9651-663a733c03c3",
  },
  {
    image: "/images/Ebooks/SCRUM.webp",
    link: "https://pay.kirvano.com/9077406a-3f28-45c7-ab5f-b06666d44693",
  },
];

const otherSlides = [
  {
    image: "/images/Ebooks/SAPIENS.webp",
    link: "https://pay.kirvano.com/ed8fe2a4-669a-4446-9c2b-6abbf90bf2df",
  },
  {
    image: "/images/Ebooks/QUEM_PENSA_ENRIQUECE.webp",
    link: "https://pay.kirvano.com/de226de7-098a-4bb1-81d5-14dc0d43d33e",
  },
  {
    image: "/images/Ebooks/O_PROBLEMA_e_SEU.webp",
    link: "https://pay.kirvano.com/9f3245f8-d221-43d1-bb40-384a5e051929",
  },
  {
    image: "/images/Ebooks/VOCE_E_UNIVERSO.webp",
    link: "https://pay.kirvano.com/04f9acce-a752-46e5-9bfa-8cb34405984b",
  },
  {
    image: "/images/Ebooks/SEX.webp",
    link: "https://pay.kirvano.com/ef07c1b5-27db-44f6-bdbe-ccfed4fc51d4",
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
