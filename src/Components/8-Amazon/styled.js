import styled from "styled-components";
import { motion } from "framer-motion";

export const PromotionalBannerContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff4d4d; /* Vermelho vibrante */
  color: #ffffff; /* Branco */
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 300px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
    max-width: none;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin: 0 0 15px;
`;

export const ActionButton = styled.button`
  background-color: #ffffff; /* Branco */
  color: #ff4d4d; /* Vermelho vibrante */
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ffe6e6;
    transform: scale(1.05);
  }
`;

export const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 5px; /* Altura da barra */
  background-color: #ffffff; /* Cor branca */
  transition: width 0.1s linear; /* Transição suave */
  border-top-left-radius: 12px; /* Arredondamento no canto esquerdo */
  border-top-right-radius: 12px; /* Arredondamento no canto direito */

  @media (max-width: 768px) {
    border-radius: 0; /* Remove arredondamento no mobile */
  }
`;