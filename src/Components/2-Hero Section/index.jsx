import { ActionHero, Button, Container, ImageHero } from "./styled";
import { FaCheck, FaDownload } from "react-icons/fa";
import { GiBurningBook } from "react-icons/gi";

import ImageMembros from "../../images/membros.webp";
import videoIntro from "../../videos/introvideo.mp4";

function HeroSection() {
  return (
    <Container>
      <ActionHero>
        <p className="gradiend">
          <GiBurningBook style={{ color: "var(--Yellow)" }} /> TORNE-SE UMA REFERÊNCIA
          E TRANSFORME SUA VIDA COM OS MELHORES EBOOKS!
        </p>

        <p className="description">
          <FaCheck color="var(--Green)" />
          <strong> Desbloqueie seu potencial!</strong> Melhore suas habilidades,
          aumente sua confiança e transforme sua mentalidade para alcançar os
          resultados que você sempre desejou.
        </p>

        <p className="description">
          <FaCheck color="var(--Green)" />
          <strong> Conquiste o conhecimento certo!</strong> Atraia as
          oportunidades que você merece e transforme todos os aspectos da sua
          vida.
        </p>

        <div className="box-3">
          <div className="btn btn-three">
            <FaDownload style={{ margin: "1rem", color: "var(--White)" }} />
            BAIXAR EBOOK AGORA
          </div>
        </div>

        <span>
          <img src={ImageMembros} alt="Membros" />
          +1.000 LEITORES
        </span>
      </ActionHero>

      <ImageHero>
        <video autoPlay loop muted playsInline>
          <source src={videoIntro} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </ImageHero>
    </Container>
  );
}

export default HeroSection;
