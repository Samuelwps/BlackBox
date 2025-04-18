import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

`;

export const ContainerFAQ = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;


  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--Red);

    span {
      color: var(--Red);
    }
  }
`;

export const Sections = styled.div`
  margin-bottom: 1rem;

  details {
    list-style: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    cursor: pointer;
    position: relative;
    margin: 0.5rem 0;
    background-color: var(--White);
    color: var(--Black);
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.27);
    transition:
      transform 0.3s ease,
      background-color 0.3s ease; /* Suaviza o movimento */

    &:hover {
      background-color: var(--LightGray);
      transform: scale(1.05); /* Aumenta o tamanho em 5% */
    }
    summary::-webkit-details-marker {
      display: none; /* Remove o marcador padrão */
    }

    summary {
      font-size: 1.2rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--Red);

      svg {
        transition: transform 0.3s ease;
      }
    }

    &[open] summary svg {
      transform: rotate(90deg);
    }

    .content {
      margin-top: 0.5rem;
      font-size: 1rem;
      font-weight: normal;
      color: var(--Black);
    }
  }
`;
