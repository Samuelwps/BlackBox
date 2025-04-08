import { ContainerAll, Container, Topcs } from "./style";
import {
  FaCheck,
  FaBriefcase,
  FaBrain,
  FaComments,
  FaKey,
  FaChartLine,
} from "react-icons/fa";

function WhoAre() {
  return (
    <ContainerAll>
      <h1>
        POR QUE VOCÊ <span>PRECISA</span> INVESTIR EM LIVROS DE <span>DESENVOLVIMENTO PESSOAL</span>?
      </h1>
      <Container>
        <Topcs>
          <FaCheck size="1.5rem" color="var(--White)" />
          <strong>VOCÊ SE TORNA SUA MELHOR VERSÃO</strong>
          <div>
            Aprenda a lidar com desafios, pessoas e oportunidades com mais{" "}
            <span>clareza</span> e <span>confiança.</span>
          </div>
        </Topcs>
        <Topcs>
          <FaBriefcase size="1.5rem" color="var(--White)" />
          <strong>MAIS RESULTADOS NA VIDA E NA CARREIRA</strong>
          <div>
            Quem se desenvolve, cresce mais rápido. Esses livros{" "}
            <span>aceleram</span> seu <span>sucesso.</span>
          </div>
        </Topcs>
        <Topcs>
          <FaBrain size="1.5rem" color="var(--White)" />
          <strong>MUDE SUA MENTALIDADE, MUDE SUA REALIDADE</strong>
          <div>
            Grandes transformações começam com novos pensamentos — e eles estão{" "}
            <span>aqui dentro.</span>
          </div>
        </Topcs>
        <Topcs>
          <FaComments size="1.5rem" color="var(--White)" />
          <strong>COMUNIQUE, INFLUENCIE, CONQUISTE</strong>
          <div>
            Aprenda a falar, agir e se posicionar como alguém que{" "}
            <span>inspira</span> e <span>lidera.</span>
          </div>
        </Topcs>
        <Topcs>
          <FaKey size="1.5rem" color="var(--White)" />
          <strong>SAIA NA FRENTE DA MAIORIA</strong>
          <div>
            A maioria não lê. Quem lê, aprende. E quem aprende, tem{" "}
            <span>vantagem.</span>
          </div>
        </Topcs>
        <Topcs>
          <FaChartLine size="1.5rem" color="var(--White)" />
          <strong>PEQUENO INVESTIMENTO, RETORNO GIGANTE</strong>
          <div>
            Um livro pode custar menos que um almoço, mas render mais que um{" "}
            <span>curso inteiro.</span>
          </div>
        </Topcs>
      </Container>
    </ContainerAll>
  );
}

export default WhoAre;
