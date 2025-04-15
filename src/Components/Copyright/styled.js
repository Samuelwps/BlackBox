import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: var(--White);
  padding: 20px;
  /* background-color: var(--gray-850); */
`;

export const SocialIcons = styled.div`
  margin-bottom: 10px;

  a {
    margin: 0 10px;
    color: var(--White);
    text-decoration: none;
    font-size: 18px;

    &:hover {
      color: var(--Black);
    }
  }
`;

export const Links = styled.div`
  margin: 10px 0;

  a {
    color: var(--White);
    text-decoration: none;
    margin: 0 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CopyrightText = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;