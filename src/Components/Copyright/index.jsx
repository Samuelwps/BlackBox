import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Importando os ícones
import { Footer, SocialIcons, Links, CopyrightText } from './styled';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer>
      <SocialIcons>
        <a href="#" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" aria-label="YouTube">
          <FaYoutube />
        </a>
      </SocialIcons>
      <Links>
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> |{' '}
        <a href="#">Your California Privacy Rights</a> |{' '}
        <a href="#">Children's Online Privacy Policy</a> |{' '}
        <a href="#">Interest-Based Ads</a> | <a href="#">Do Not Sell My Info</a>
      </Links>
      <CopyrightText>© 2022-{currentYear} BLACKBOXDIGITAL</CopyrightText>
    </Footer>
  );
};

export default Copyright;