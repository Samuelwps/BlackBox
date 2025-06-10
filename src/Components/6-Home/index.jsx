import {
  Container,
  SectionBook,
  Price,
  ContainerInLine,
  Lines,
  Stars,
  DisabledButton,
  RecommendationsGrid,
  RecommendationCard,
} from "./styles";
import { BsBookHalf } from "react-icons/bs";
import { MdLock } from "react-icons/md"; // Importa o ícone de cadeado
import { motion } from "framer-motion";
import { MdGetApp } from "react-icons/md";
import { CTAButton } from "../PainToPowerSection/styled";
import { FaClock } from "react-icons/fa"; // Import the clock icon
import { FaBrain, FaUnlock, FaHeart } from "react-icons/fa"; // Exemplos de ícones

const books = [
  {
    id: 1,
    title: "Pack Mente Inabalável",
    description:
      "Este pack te ensina a forjar uma mente forte como aço: hábitos que mudam vidas, controle das emoções, superação de limites e estratégias para calar o ego sabotador. Ideal pra quem quer parar de desistir no meio do caminho e virar uma máquina de foco e consistência.",
    icon: <FaBrain />,
    color: "#FF5733", // Cor para o ícone
    image: "/images/BrainForce.png",
    link: "https://pay.kirvano.com/a8b6852c-9c03-4b1a-b951-1a2a74141cc8",
    recommendations: [
      { title: "O Poder do Hábito", author: "Charles Duhigg" },
      { title: "Mindset", author: "Carol S. Dweck" },
      { title: "Essencialismo", author: "Greg McKeown" },
    ],
  },
  {
    id: 2,
    title: "Pack Liberdade e Poder",
    description:
      "Aqui você descobre como sair das armadilhas mentais, assumir o comando da sua vida e atrair prosperidade com uma mentalidade vencedora. Um guia para quem quer liberdade emocional, riqueza consciente e presença total no agora.",
    icon: <FaUnlock />,
    color: "#33FF57", // Cor para o ícone
    image: "/images/BrainOpen.png",
    link: "https://pay.kirvano.com/6d4f62b1-9c12-4f4b-b123-8f4c13d2c123",
    recommendations: [
      { title: "Os Segredos da Mente Milionária", author: "T. Harv Eker" },
      { title: "Quem Pensa Enriquece", author: "Napoleon Hill" },
      { title: "O Ego é Seu Inimigo", author: "Ryan Holiday" },
    ],
  },
  {
    id: 3,
    title: "Pack Conexão e Propósito",
    description:
      "Esse pack é uma jornada de dentro pra fora: vulnerabilidade com coragem, propósito com clareza e um mergulho no seu subconsciente pra destravar seu verdadeiro potencial. Ideal pra quem quer mais significado, relações verdadeiras e impacto positivo no mundo.",
    icon: <FaHeart />,
    color: "#3357FF", // Cor para o ícone
    image: "/images/BrainHeart.png",
    link: "https://pay.kirvano.com/8a7d12c3-2b45-4c67-a134-7e8b123c4567",
    recommendations: [
      { title: "O Caminho do Artista", author: "Julia Cameron" },
      { title: "Propósito", author: "Sri Prem Baba" },
      { title: "Inteligência Emocional", author: "Daniel Goleman" },
    ],
  },
];

function redirecioneComHistorico(link) {
  window.location.href = link;
}

function Home() {
  return (
    <>
      <ContainerInLine>
        <Lines />
        <motion.div
          className="IconWrapper"
          animate={{ rotateY: [0, 180, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <BsBookHalf size="3rem" color="var(--White)" />
        </motion.div>
        <Lines />
      </ContainerInLine>

      <Container>
        <h1>
          PACKs EM <span>DESTAQUE</span>
        </h1>
        <Stars />

        {books.map(book => (
          <SectionBook
            key={book.id}
            data-pack={book.title.replace(/\s/g, "-").toLowerCase()}
          >
            {/* Glow/Neon Accent */}
            <div className="pack-glow" data-pack-color={book.color} />
            <div className="flexBlocks">
              <img src={book.image} alt={book.title} />
            </div>

            <div className="flexBlock">
              <li>
                <div>
                  <div>
                    <motion.div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        textAlign: "center",
                      }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <book.icon.type
                        style={{
                          color: book.color,
                          fontSize: "2.2rem",
                        }}
                      />
                      <strong className="pack-title">{book.title}</strong>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="pack-description"
                    >
                      {book.description}
                    </motion.p>
                    <RecommendationsGrid className="pack-recommendations">
                      {book.recommendations &&
                        book.recommendations.map((rec, idx) => (
                          <RecommendationCard key={idx}>
                            <div className="rec-title">{rec.title}</div>
                            <div className="rec-author">{rec.author}</div>
                          </RecommendationCard>
                        ))}
                    </RecommendationsGrid>
                  </div>
                  <Price style={{ textAlign: "center" }}>
                    <del>{book.oldPrice}</del>
                    <h2>{book.newPrice}</h2>
                    <CTAButton href="#" disabled>
                      <FaClock
                        style={{ marginRight: "0.5rem", fontSize: "1.2rem" }}
                      />
                      Disponível em Breve
                    </CTAButton>
                  </Price>
                </div>
              </li>
            </div>
          </SectionBook>
        ))}
      </Container>
    </>
  );
}

export default Home;
