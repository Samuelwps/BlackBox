import styled, { keyframes } from "styled-components";
import { MdLock } from "react-icons/md";

// Animação das estrelas
const animStars = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-150px);
  }
`;

// Container com fundo animado
export const Container = styled.div`
  margin: 10rem auto 0;
  padding: 2rem;
  width: 100%;
  max-width: 1440px;
  background: linear-gradient(0, #120c56, #000000); /* Gradiente */
  overflow: hidden;
  border-top: 3px solid var(--White);
  border-bottom: 3px solid var(--White);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  gap: 2rem;

  h1 {
    font-weight: normal;
    color: white;
    text-align: center;
    font-size: 2rem;

    span {
      color: var(--Red);
    }
  }

  /* Estrelas principais */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%; /* Aumenta a altura para permitir a animação */
    background: transparent;
    box-shadow:
      50px 30px white,
      100px 80px white,
      80px 120px white,
      300px 20px white,
      250px 130px white,
      200px 50px white,
      150px 100px white,
      320px 100px white;
    animation: ${animStars} 10s linear infinite;
    z-index: 0;
  }

  /* Estrelas secundárias */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%; /* Aumenta a altura para permitir a animação */
    background: transparent;
    box-shadow:
      15px 15px white,
      125px 35px white,
      50px 80px white,
      10px 120px white,
      275px 90px white,
      230px 10px white,
      120px 130px white,
      300px 130px white,
      220px 115px white;
    animation: ${animStars} 20s linear infinite;
    animation-delay: 5s;
    z-index: 0;
  }
`;

// ===================== Estrelas =====================
const animStars1 = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  display: flex;
  gap: 0.5rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background-repeat: repeat;
    background-image: radial-gradient(white 1px, transparent 1px);
    background-size: 150px 210px;
    animation: ${animStars1} 250s linear infinite;
    opacity: 0.4;
  }

  &::after {
    animation-delay: 1s;
    background-size: 100px 140px;
    opacity: 0.6;
  }
`;

// ===================== Estrelas Extras =====================
const animStars2 = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-200vw);
  }
`;

// export const Stars1 = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw; /* Largura exata da tela */
//   height: 100vh; /* Altura exata da tela */
//   z-index: 10;
//   pointer-events: none;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     border-radius: 50%;
//     animation: ${animStars2} 60s linear infinite;
//     box-shadow:
//       0px 80px white,
//       150px 120px white,
//       300px 30px white,
//       400px 250px white,
//       500px 100px white,
//       600px 180px white,
//       700px 60px white,
//       800px 220px white,
//       900px 140px white,
//       1000px 300px white,
//       1100px 90px white,
//       1200px 200px white,
//       1300px 50px white,
//       1350px 180px white;
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     border-radius: 50%;
//     top: 200px;
//     animation: ${animStars2} 600s linear infinite;
//     animation-delay: 30s;
//     opacity: 0.7;
//     box-shadow:
//       80px 100px white,
//       170px 200px white,
//       250px 50px white,
//       370px 180px white,
//       470px 120px white,
//       580px 210px white,
//       690px 90px white,
//       790px 160px white,
//       880px 70px white,
//       960px 220px white,
//       1060px 180px white,
//       1180px 130px white,
//       1280px 100px white,
//       1380px 250px white;
//   }
// `;

// ===================== Sessão do Livro =====================
export const SectionBook = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin: 3rem 0;
  flex-wrap: wrap;
  gap: 0rem;
  background: transparent;
  padding: 1.5rem 1rem;
  border-radius: 18px;
  position: relative;
  overflow: visible;
  box-shadow:
    0 4px 32px 0 #000a,
    0 1.5px 8px 0 #2228;

  /* Futuristic glassmorphism background for the whole pack */
  &[data-pack="pack-mente-inabalável"] {
    background: linear-gradient(120deg, #ff573320 0%, #23272f 100%);
    border: 2px solid #ff5733cc;
    box-shadow:
      0 0 32px #ff573344,
      0 8px 32px #000a;
  }
  &[data-pack="pack-liberdade-e-poder"] {
    background: linear-gradient(120deg, #33ff5720 0%, #23272f 100%);
    border: 2px solid #33ff57cc;
    box-shadow:
      0 0 32px #33ff5733,
      0 8px 32px #000a;
  }
  &[data-pack="pack-conexão-e-propósito"] {
    background: linear-gradient(120deg, #3357ff20 0%, #23272f 100%);
    border: 2px solid #3357ffcc;
    box-shadow:
      0 0 32px #3357ff33,
      0 8px 32px #000a;
  }

  .pack-glow {
    position: absolute;
    top: -60px;
    right: -60px;
    width: 180px;
    height: 180px;
    z-index: 0;
    pointer-events: none;
    border-radius: 50%;
    opacity: 0.7;
    filter: blur(32px);
    background: radial-gradient(circle, #fff 0%, transparent 70%);
    mix-blend-mode: lighten;
  }
  &[data-pack="pack-mente-inabalável"] .pack-glow {
    background: radial-gradient(circle, #ff5733cc 0%, transparent 70%);
  }
  &[data-pack="pack-liberdade-e-poder"] .pack-glow {
    background: radial-gradient(circle, #33ff57cc 0%, transparent 70%);
  }
  &[data-pack="pack-conexão-e-propósito"] .pack-glow {
    background: radial-gradient(circle, #3357ffcc 0%, transparent 70%);
  }

  .pack-title {
    font-weight: 900;
    font-size: 2rem;
    letter-spacing: 0.02em;
    margin-bottom: 0.2rem;
    color: #fff;
    filter: drop-shadow(0 0 8px #fff8);
    text-shadow:
      0 0 16px #fff,
      0 0 2px #000;
    transition: color 0.2s;
    background: none;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    background-clip: unset;
  }
  &[data-pack="pack-mente-inabalável"] .pack-title {
    color: #ff5733;
    filter: drop-shadow(0 0 12px #ff5733cc);
    text-shadow:
      0 0 16px #ff5733cc,
      0 0 2px #fff;
    background: none;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    background-clip: unset;
  }
  &[data-pack="pack-liberdade-e-poder"] .pack-title {
    color: #33ff57;
    filter: drop-shadow(0 0 12px #33ff57cc);
    text-shadow:
      0 0 16px #33ff57cc,
      0 0 2px #fff;
    background: none;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    background-clip: unset;
  }
  &[data-pack="pack-conexão-e-propósito"] .pack-title {
    color: #3357ff;
    filter: drop-shadow(0 0 12px #3357ffcc);
    text-shadow:
      0 0 16px #3357ffcc,
      0 0 2px #fff;
    background: none;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    background-clip: unset;
  }

  .flexBlocks {
    flex: 1 1 280px;
    
    min-width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.07);
    box-shadow: 0 2px 16px 0 #0005;
    backdrop-filter: blur(18px);
    border-radius: 18px;
    border: 1.5px solid rgba(255, 255, 255, 0.13);
    margin-right: 2rem;
    z-index: 1;
    transition: box-shadow 0.2s;

    img {
      width: 100%;
      max-width: 520px;
     
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 12px;
      filter: drop-shadow(0px 10px 15px #000c);
      padding: 0.5rem;
      display: block;
    }
  }

  .flexBlock {
    flex: 2 1 400px;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(24, 28, 34, 0.85);
      box-shadow: 0 2px 16px 0 #0007;
      border-radius: 18px;
      padding: 2rem 1.5rem;
      color: #fff;
      transition: 0.3s;
      list-style: none;
      text-align: center;
      border: 1.5px solid rgba(255, 255, 255, 0.08);

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.2rem;
        width: 100%;
      }
    }
  }

  /* Descrição do pack */
  .pack-description {
    white-space: pre-line;
    line-height: 1.7;
    text-align: center;
    color: #e3e8ee;
    margin: 1rem 0 1.5rem 0;
    font-size: 1.08rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    text-shadow: 0 1px 8px #0007;
    border-left: 3px solid transparent;
    border-radius: 6px;
    padding: 0.2rem 0.5rem;
    background: rgba(255, 255, 255, 0.01);
    transition: border-color 0.2s;
  }
  &[data-pack="pack-mente-inabalável"] .pack-description {
    border-left: 3px solid #ff5733cc;
  }
  &[data-pack="pack-liberdade-e-poder"] .pack-description {
    border-left: 3px solid #33ff57cc;
  }
  &[data-pack="pack-conexão-e-propósito"] .pack-description {
    border-left: 3px solid #3357ffcc;
  }

  /* Recomendações */
  .pack-recommendations {
    border: none;
    box-shadow: 0 0 16px #0004;
    background: rgba(31, 39, 41, 0.92);
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.7rem 0.5rem;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 0.7rem;
  }

  /* Responsivo */
  @media (max-width: 900px) {
    flex-direction: column;
    .flexBlocks {
      margin-right: 0;
      margin-bottom: 1.5rem;
    }
  }
`;

// ===================== Preço =====================
export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  text-align: center; /* Centraliza o texto */
  gap: 0.5rem; /* Espaçamento entre os elementos */

  font-optical-sizing: auto;
  font-style: normal;

  del {
    font-size: 1rem;
    color: var(--LightGray);
    font-weight: 900;
  }

  h3 {
    font-size: 1rem;
    color: var(--White);
  }

  h2 {
    font-size: 3rem;
    color: var(--Red);
    font-weight: 900;
  }

  /* button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;

    font-size: 1rem;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    background-color: var(--Red);
    color: var(--White);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--DarkRed);
    }
  } */
`;

// ===================== Container Inline =====================
export const ContainerInLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .IconWrapper {
    margin: 2rem;
  }
`;

// ===================== Linha Divisória =====================
export const Lines = styled.div`
  flex: 1; /* Faz com que a linha ocupe o máximo de espaço disponível */
  height: 2px;
  background-color: var(--White);
`;

export const DisabledButton = styled.button`
  background-color: var(--Gray);
  color: var(--LightGray);
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: not-allowed;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: none; /* Remove transições */
  pointer-events: none; /* Desativa interações */

  &:hover {
    background-color: var(--Gray); /* Mantém a cor no hover */
    transform: none; /* Remove transformações */
    box-shadow: none; /* Remove sombras */
  }

  svg {
    margin-right: 8px;
    font-size: 1.5rem;
  }
`;

// ===================== Recomendações de Livros =====================
export const RecommendationsGrid = styled.div`
  display: contents;
`;

export const RecommendationCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border-radius: 0.7rem;
  padding: 0.8rem 0.5rem;
  color: #fff;
  border: 1.5px solid transparent;
  box-shadow: 0 0 8px #0004;
  transition:
    transform 0.18s cubic-bezier(0.4, 2, 0.6, 1),
    box-shadow 0.18s cubic-bezier(0.4, 2, 0.6, 1),
    border 0.18s;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  min-width: 0;

  &:hover {
    transform: translateY(-4px) scale(1.045);
    box-shadow:
      0 0 18px #fff7,
      0 2px 16px #000a;
    border: 1.5px solid #fff;
    background: rgba(255, 255, 255, 0.09);
  }

  .rec-title {
    font-weight: 700;
    margin-bottom: 0.2rem;
    font-size: 1.08rem;
    color: #fff;
    letter-spacing: 0.01em;
    text-shadow: 0 0 8px #fff8;
    transition: color 0.2s;
  }
  .rec-author {
    font-size: 0.95rem;
    opacity: 0.7;
    color: #e3e8ee;
  }

  /* Cores dinâmicas para cada pack */
  [data-pack="pack-mente-inabalável"] & .rec-title {
    color: #ff5733;
    text-shadow: 0 0 8px #ff5733cc;
  }
  [data-pack="pack-liberdade-e-poder"] & .rec-title {
    color: #33ff57;
    text-shadow: 0 0 8px #33ff57cc;
  }
  [data-pack="pack-conexão-e-propósito"] & .rec-title {
    color: #3357ff;
    text-shadow: 0 0 8px #3357ffcc;
  }
`;
