import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: transparent; /* Cor de fundo */
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1440px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: transparent; /* Fundo branco para cada seção */
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: var(--DarkGray); /* Cor do rodapé */
  color: #fff;
  text-align: center;
`;

export const BannerWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;