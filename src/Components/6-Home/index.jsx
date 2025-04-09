import {
  Container,
  SectionBook,
  Price,
  ContainerInLine,
  Lines, // Já está sendo importado de "./styles"
  Stars,
  // Stars1,
} from "./styles";
import { BsBookHalf } from "react-icons/bs";
import { motion } from "framer-motion";

import imageFBI from "../../images/FBI.png";
import imagePER from "../../images/persuasão.png";
import imageGUE from "../../images/guerra.png";


import { MdGetApp } from "react-icons/md";

const books = [
  {
    id: 1,
    title: "MANUAL DE PERSUASÃO DO FBI (Jack Schafer)",
    description:
      "O Manual de Persuasão do FBI, de Jack Schafer, ensina técnicas de persuasão e construção de rapport usadas pelo FBI para influenciar e conquistar a confiança das pessoas.",
    oldPrice: "R$30,99",
    newPrice: "R$15,99",
    image: imageFBI,
    link: "https://pay.kirvano.com/a8b6852c-9c03-4b1a-b951-1a2a74141cc8",
  },
  {
    id: 2,
    title: "As Armas da Persuasão (Robert Cialdini)",
    description:
      "Aprenda a arte de influenciar pessoas com base em princípios psicológicos comprovados.",
    oldPrice: "R$45,00",
    newPrice: "R$22,50",
    image: imagePER,
    link: "https://pay.kirvano.com/6d4f62b1-9c12-4f4b-b123-8f4c13d2c123",
  },
  {
    id: 3,
    title: "A Arte da Guerra (Sun Tzu)",
    description:
      "Estratégias atemporais de Sun Tzu aplicadas aos negócios, política e vida pessoal.",
    oldPrice: "R$39,90",
    newPrice: "R$19,95",
    image: imageGUE,
    link: "https://pay.kirvano.com/8a7d12c3-2b45-4c67-a134-7e8b123c4567",
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
          LIVROS EM <span>DESTAQUE</span>
        </h1>
        <Stars />

        {books.map(book => (
          <SectionBook key={book.id}>
            <div className="flexBlocks">
              <img src={book.image} alt={book.title} />
            </div>

            <div className="flexBlock">
              <li>
                <div>
                  <div>
                    <strong>{book.title}</strong>
                    <p>{book.description}</p>
                  </div>
                  <Price>
                    <del>DE {book.oldPrice}</del>
                    <h3>POR</h3>
                    <h2>{book.newPrice}</h2>
                    <button
                      className="btn btn-3"
                      type="button"
                      onClick={() => redirecioneComHistorico(book.link)}
                    >
                      <MdGetApp size="2rem" className="IconDownload" />
                      QUERO MEU EBOOK AGORA!
                    </button>
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
