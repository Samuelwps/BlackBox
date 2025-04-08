import { Container, ContainerFAQ, Sections } from "./styled";
import { FaCaretRight } from "react-icons/fa6";

const questions = [
  {
    question: "Como recebo meu livro após a compra?",
    answer:
      "Assim que o pagamento for confirmado, você recebe um link para baixar o livro diretamente no seu e-mail. Simples, rápido e sem espera!",
  },
  {
    question: "O livro é físico ou digital?",
    answer:
      "Todos os nossos livros são digitais no formato PDF. Você pode ler no celular, tablet, computador ou até imprimir se preferir!",
  },
  {
    question: "Preciso de algum aplicativo para abrir o livro?",
    answer:
      "Não! Qualquer celular, tablet ou computador já vem com leitor de PDF instalado. Mas, se quiser melhorar sua experiência, recomendamos apps como Adobe Reader, Google Drive ou até o próprio navegador.",
  },
  {
    question: "Tem frete ou algum custo extra?",
    answer:
      "Nada de taxas escondidas! O valor que você vê é o valor final. Como o livro é digital, você não paga frete e recebe na hora.",
  },
  {
    question: "Posso acessar o livro em mais de um dispositivo?",
    answer:
      "Sim! Depois de baixar, ele é seu para ler onde quiser, quando quiser.",
  },
  {
    question: "E se eu perder o arquivo, como faço?",
    answer:
      "Sem crise! Você pode entrar em contato com a gente e reenviamos o link para você baixar de novo.",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "Totalmente! Trabalhamos com plataformas de pagamento confiáveis, que protegem seus dados e garantem uma compra tranquila.",
  },
  {
    question: "Em quanto tempo recebo meu livro após o pagamento?",
    answer:
      "Imediatamente após a confirmação do pagamento. Se pagar no Pix ou cartão, é na hora!",
  },
  {
    question: "Vocês têm garantia?",
    answer:
      "Sim! Se tiver qualquer problema no acesso ao arquivo, entre em contato e resolvemos para você.",
  },
  {
    question: "Os livros vêm completos e sem cortes?",
    answer:
      "Com certeza! Todos os nossos livros são versões integrais, sem cortes e com alta qualidade de leitura.",
  },
];

function Questions() {
  return (
    <Container>
      <ContainerFAQ>
        <h1>
          <span>DÚVIDAS</span> FREQUENTES?
        </h1>

        {questions.map((item, index) => (
          <Sections key={index}>
            <details>
              <summary>
                <FaCaretRight style={{ fontSize: "2rem" }} />
                {item.question}
              </summary>
              <p className="content">{item.answer}</p>
            </details>
          </Sections>
        ))}
      </ContainerFAQ>
    </Container>
  );
}

export default Questions;
