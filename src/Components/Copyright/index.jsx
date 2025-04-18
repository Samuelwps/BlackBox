import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Importando os ícones
import { Footer, SocialIcons, Links, CopyrightText } from './styled';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer>
      <SocialIcons>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.instagram.com/blakboxdigital/" aria-label="Twitter">
          <FaTwitter />
        </a>
      </SocialIcons>
      {/* <Links>

      </Links> */}
      <CopyrightText>© 2022-{currentYear} BLACKBOXDIGITAL</CopyrightText>
    </Footer>
  );
};

export default Copyright;