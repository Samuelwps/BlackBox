import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 2rem;
  background-color: var(--gray-900);
  text-align: center;
  color: var(--White);
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--Red);
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: var(--Gray);
  margin-bottom: 2rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: var(--gray-800);
  border-radius: 12px;
  padding: 1.5rem;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante alinhamento do botão no final */
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--White);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: var(--Gray);
    margin-bottom: 1rem;
  }
`;

export const Button = styled.a`
  background-color: var(--Red);
  color: var(--White);
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: auto; /* Garante que o botão fique no final */

  &:hover {
    background-color: var(--Green);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 255, 0, 0.5);
  }

  svg {
    margin-right: 8px;
  }
`;
