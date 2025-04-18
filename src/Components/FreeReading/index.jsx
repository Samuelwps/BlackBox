import React from "react";
import { Container, Title, Description, Cards, Card, Button } from "./styled";
import { FaDownload } from "react-icons/fa";
import OpoderdoHabito from "/src/images/Ebooks/habito.webp";
import MindSet from "/src/images/Ebooks/mindset.webp";

const freeBooks = [
  {
    id: 1,
    title: "O Poder do Hábito",
    image: OpoderdoHabito,
    link: "/downloads/OPoderDoHabito.pdf", // Caminho correto para a pasta public/downloads
  },
  {
    id: 2,
    title: "Mindset: A Nova Psicologia do Sucesso",
    image: MindSet,
    link: "/downloads/MindSet.pdf", // Caminho correto para a pasta public/downloads
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
