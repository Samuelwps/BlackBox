import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;

  margin: 0 auto;

  padding: 2rem;

  border-top: 1px solid var(--gray-800);
`;

export const ContainerLogo = styled.div`
  max-height: 3rem;
  width: 100vw;

  background-color: red;
  display: flex;
  justify-content: center;

  align-items: center;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover; /* Faz a imagem se comportar como cover */
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 3rem;
  background: linear-gradient(90deg, #1e1e1e, #3a3a3a);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  color: var(--Red); /* Dourado */
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: var(--White);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "PT Sans", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
