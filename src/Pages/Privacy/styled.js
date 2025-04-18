import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 5rem auto 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    color: #444;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ddd;
    padding-bottom: 0.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  text-align: justify;
  margin-bottom: 1rem;
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #777;
`;