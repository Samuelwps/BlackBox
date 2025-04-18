import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'; // Importando o ícone do TikTok
import { Footer, SocialIcons, Links, CopyrightText } from './styled';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer>
      <SocialIcons>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" aria-label="TikTok">
          <FaTiktok />
        </a>
      </SocialIcons>
      <Links>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="#">Terms of Use</a>
      </Links>
      <CopyrightText>© 2022-{currentYear} BLACKBOXDIGITAL</CopyrightText>
    </Footer>
  );
};

export default Copyright;