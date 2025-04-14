import React, { useState, useEffect } from "react";
import { FaGift } from "react-icons/fa";
import {
  PromotionalBannerContainer,
  Title,
  Description,
  ActionButton,
  ProgressBar,
} from "./styled.js";

const PromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Atualiza o progresso a cada 1 segundo
    const interval = setInterval(() => {
      setProgress(prev => {
        const nextProgress = prev + 100 / 120; // Incrementa proporcionalmente para 2 minutos
        if (nextProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return nextProgress;
      });
    }, 1000);

    // Remove o componente após 2 minutos
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 120000); // 2 minutos em milissegundos

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <PromotionalBannerContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ProgressBar style={{ width: `${progress}%` }} />
      <Title>
        <FaGift style={{ marginRight: "8px", fontSize: "3rem" }} />
        Ganhe um eBook Exclusivo GRÁTIS na compra de um Kindle!
      </Title>
      <Description>
        Adquira seu Kindle na Amazon pelo nosso link e receba um eBook
        motivacional exclusivo, feito pra transformar sua rotina. Oferta por
        tempo limitado.
      </Description>
      <ActionButton
        onClick={() => window.open("https://www.amazon.com", "_blank")}
      >
        Comprar Kindle e Ganhar eBook
      </ActionButton>
    </PromotionalBannerContainer>
  );
};

export default PromotionalBanner;
