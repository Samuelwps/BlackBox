import styled from "styled-components";

export const ContainerAll = styled.section`
  margin: 0 auto;
  max-width: 1440px;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top: 1px solid var(--Gray);
  border-bottom: 1px solid var(--Gray);

  background-color: #0d0d0d;
  background-image:
    radial-gradient(circle, var(--Red-100) 1px, transparent 1px),
    radial-gradient(circle, var(--Red-100) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0px 0px, 10px 10px;

  text-align: center;

  h1 {
    font-weight: 600;
    color: var(--White);

    margin-bottom: 2rem;
  }

  h1 span {
    color: var(--Red);
  }
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Topcs = styled.div`
  width: 24rem;
  min-height: 8rem;

  padding: 1rem;

  display: flex;
  flex-direction: column; /* Alinha ícone e texto lado a lado */
  align-items: center; /* Centraliza verticalmente */
  gap: 1rem; /* Espaçamento entre o ícone e o texto */

  text-align: center; /* Alinha o texto à esquerda */
  font-size: 1.1rem;
  font-weight: normal;

  margin: 6px;
  border-radius: 30px;
  border: 2px solid rgba(247, 0, 0, 0.78);
  background-color: rgba(247, 0, 0, 0);
  backdrop-filter: blur(3px);
  color: var(--Gray-100);

  strong {
    font-size: 1rem;
    font-weight: 600;
    color: var(--White);
    margin-bottom: 0.5rem;
  }

  span {
    color: var(--Red);
    font-weight: bold;
  }

  svg {
    flex-shrink: 0; /* Garante que o ícone não deforme */
    font-size: 2rem; /* Ajusta o tamanho do ícone */
    color: var(--White); /* Cor do ícone */
  }
`;
