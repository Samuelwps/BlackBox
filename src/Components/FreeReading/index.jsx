import React from "react";
import { Container, Title, Description, Cards, Card, Button } from "./styled";
import { FaDownload } from "react-icons/fa";

const freeBooks = [
  {
    id: 1,
    title: "O Poder do Hábito",
    image: "/images/Ebooks/o_poder_do_habito.webp",
    description: "Descubra como hábitos moldam sua vida e como transformá-los.",
    link: "/downloads/OPoderDoHabito.pdf",
  },
  {
    id: 2,
    title: "Mindset: A Nova Psicologia do Sucesso",
    image: "/images/Ebooks/mindset.webp",
    description: "Aprenda a desenvolver uma mentalidade de crescimento.",
    link: "/downloads/MindSet.pdf",
  },
  {
    id: 3,
    title: "O Poder Da Autorresponsabilidade",
    image: "/images/Ebooks/autoresponsabilidade.webp",
    description: "Assuma o controle da sua vida com autorresponsabilidade.",
    link: "/downloads/OPoderDaAutorresponsabilidade.pdf",
  },
];

const FreeReading = () => {
  return (
    <Container>
      <Title>Leitura Gratuita</Title>
      <Description>
        "Transforme sua vida com conhecimento! Baixe agora nossos eBooks
        gratuitos e comece sua jornada de desenvolvimento pessoal."
      </Description>
      <Cards>
        {freeBooks.map(book => (
          <Card key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <Button href={book.link} download>
              <FaDownload />
              Baixar Agora
            </Button>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default FreeReading;
