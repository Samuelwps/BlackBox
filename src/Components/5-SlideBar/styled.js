import styled from "styled-components";

export const ContainerALl = styled.div`
  width: 100vw; /* Ajusta para a largura total da tela */
  padding: 0 16px; /* Adiciona um espaçamento lateral para melhor visualização em telas menores */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem; /* Margem padrão para dispositivos menores */

  @media (max-width: 768px) {
    margin-bottom: -8rem; /* Margem negativa para versão mobile */
  }

  @media (min-width: 1024px) {
    margin-bottom: -4rem; /* Margem negativa para versão desktop */
  }
`;

export const Container = styled.div`
  width: 80%;
  margin-top: 1rem; /* Margem padrão */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: -4rem; /* Margem negativa para versão mobile */
  }

  @media (min-width: 1024px) {
    width: 100%;
  }

  .inner {
    display: flex;
    overflow: visible;
    gap: 2px; /* Reduzido para o mínimo possível */
  }

  .item {
    min-height: 150px;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      min-height: 200px;
      min-width: 400px;
    }

    @media (min-width: 1024px) {
      min-height: 250px;
      min-width: 450px;
    }
  }

  .item img {
    width: 80%;
    height: 80%;
    border-radius: 12px;
    pointer-events: none;
  }

  .carousel {
    cursor: grab;
    overflow-x: hidden; /* 👈 Aqui resolve o scroll indesejado */
    width: 100%;
    display: flex;
    flex-wrap: nowrap;

    /* A mágica do fade nas laterais */
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
    mask-composite: exclude;
    -webkit-mask-composite: destination-in;

    /* Deixa a transição mais fluida visualmente */
    transition: mask-image 0.3s ease-in-out;
  }
`;

export const ContainerLine = styled.div`
  display: flex;
  justify-content: flex-end; /* ✅ Alinha o ícone à direita */
  align-items: center;
  width: 100%; /* ✅ Faz a linha ocupar toda a largura */
  position: relative;

  .DivFinger {
    position: absolute;
    right: 0; /* ✅ Posiciona na ponta direita */
    top: -40px; /* ✅ Move para cima */
    font-size: 4rem;
  }
`;

export const Line = styled.div`
  background-color: white;
  height: 2px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 80%;
  background: linear-gradient(45deg, #ff073a, #991b1b);
  color: #fff;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(255, 7, 58, 0.5);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(45deg, #991b1b, #ff073a);
    box-shadow: 0 6px 20px rgba(255, 7, 58, 0.7);
    transform: scale(1.05);
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  .button-text {
    z-index: 1;
  }
`;

export const ContainerInLine = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;

  .IconWrapper {
    margin: 2rem;
  }
`;

export const Lines = styled.div`
  width: 100%;
  height: 1px;

  background-color: var(--White);
`;

export const ContainerHeader = styled.div`
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem; /* Reduz a distância entre o título e a divisão */
  text-align: center;

  h1 {
    font-weight: 600;
    font-size: 2.5rem;
    color: var(--Red);
  }

  span {
    font-size: 1.5rem;
    color: var(--White);
    margin-top: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: var(--White);
    margin-top: 0.5rem;
  }
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta a imagem para cobrir a área sem distorção */
    border-radius: 8px; /* Opcional: adiciona bordas arredondadas */
  }
`;
