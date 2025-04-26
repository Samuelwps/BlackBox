import { FaCommentDots } from "react-icons/fa"; // Importação do ícone
import {
  Container,
  ReviewsHeader,
  ContainerReviews,
  TestimonialItem,
  TestimonialRate,
  TestimonialQuote,
  TestimonialAuthor,
  AuthorAvatar,
  AuthorInfo,
} from "./styled.js";

function Reviews() {
  const testimonials = [
    {
      id: 1,
      text: "Eu li um dos eBooks em uma tarde e já mudei minha forma de pensar no trabalho. Resultado? Fui promovido 2 meses depois. Vale cada centavo!",
      name: "Bruno L., 32 anos, Gerente Comercial",
      date: "cliente desde 2025",
      image: "/images/avatar/avatar2.webp", // Caminho direto para a pasta public
    },
    {
      id: 2,
      text: "Sempre achei que desenvolvimento pessoal era enrolação… até começar a aplicar as técnicas simples que aprendi aqui. Em 3 semanas, meus resultados dobraram. Incrível!",
      name: "Tatiane R., 28 anos, Empreendedora",
      date: "cliente desde 2022",
      image: "/images/avatar/avatar1.webp", // Caminho direto para a pasta public
    },
    {
      id: 3,
      text: "Eu nunca tive o hábito de ler, mas esses eBooks são diferentes. Linguagem direta, conteúdo prático e transformação real. Hoje tenho mais foco, mais disciplina e muito mais autoconfiança.",
      name: "Carlos M., 24 anos, Estudante de Engenharia",
      date: "cliente desde 2023",
      image: "/images/avatar/avatar3.webp", // Caminho direto para a pasta public
    },
  ];

  return (
    <Container>
      <ReviewsHeader>
        <h1>
          <FaCommentDots /> O que dizem nossos leitores:
        </h1>
      </ReviewsHeader>

      <ContainerReviews>
        {testimonials.map(({ id, text, name, date, image }) => (
          <TestimonialItem key={id}>
            <TestimonialRate>
              {Array(5)
                .fill()
                .map((_, index) => (
                  <span key={index}>⭐</span>
                ))}
            </TestimonialRate>

            <TestimonialQuote>{text}</TestimonialQuote>

            <TestimonialAuthor>
              <AuthorAvatar>
                <img src={image} alt={name} />
              </AuthorAvatar>
              <AuthorInfo>
                <h3>{name}</h3>
                <p>{date}</p>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialItem>
        ))}
      </ContainerReviews>
    </Container>
  );
}

export default Reviews;
