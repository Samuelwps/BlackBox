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
  margin: 3rem;
  flex-wrap: wrap;
  gap: 0rem;
  background-color: transparent;
  padding: 1rem;

  border-radius: 8px;

  .flexBlocks {
    flex: 1 1 300px;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 0 4px 22px 0 rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(13.5px);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      filter: drop-shadow(0px 20px 15px rgb(0, 0, 0));
    }
  }

  .flexBlock {
    flex: 1 1 400px;
    max-width: 500px;
    flex: 2;

    li {
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;

      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center; /* Centraliza verticalmente */
      align-items: center; /* Centraliza horizontalmente */
      background-color: var(--Black);
      box-shadow: 0 4px 22px 0 rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      padding: 2rem;
      color: white;
      transition: 0.3s;
      list-style: none;

      text-align: center; /* Centraliza o texto */

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center; /* Centraliza verticalmente */
        align-items: center; /* Centraliza horizontalmente */
        text-align: center; /* Centraliza o texto */
        gap: 1rem;

        strong {
          color: var(--Red);
          font-weight: 800;
          font-size: 1.8rem;
          font-size: 1.5rem;
          color: var(--White);
        }

        p {
          margin-top:1rem;
          font-size: 1rem;
          font-size: 1rem;
          color: var(--LightGray);
        }

        del {
          font-size: 2rem;
          font-weight: 500;
          color: var(--Red);
          text-decoration: line-through solid var(--Red);
          text-decoration-thickness: 0.3rem;
          position: relative;
          display: inline-block;
          color: white;
        }

        h2 {
          font-size: 3rem;
          font-weight: 500;
        }

        /* button {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          text-transform: uppercase;
          text-decoration: none;

          font-optical-sizing: auto;
          font-style: normal;

          font-weight: 600;
          font-size: 1.2rem;
          line-height: 1.5;
          letter-spacing: 0.1rem;

          padding: 1rem 2rem;
          margin-top: 1rem;
          border-radius: 40px;
          cursor: pointer;

          color: var(--White);
          background: var(--Red);
          border: 1px solid var(--Red);

          transition: 0.3s;
          box-shadow: 0 4px 22px 0 rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(13.5px);

          .IconDownload {
            color: var(--White);
            margin-right: 1rem;
            font-size: 1.5rem;
            transition: 0.3s;
          }

          &:hover {
            box-shadow: 0 8px 32px 0 rgba(0, 247, 0, 0.78);
            background: transparent;
            color: var(--Green);
            border: 1px solid var(--Green);

            .IconDownload {
              color: var(--Green);
            }
          }
        } */
      }
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
