import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { HeaderContainer, Logo, Title } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <FaBoxOpen />
      </Logo>
      <Title>Black Box Digital</Title>
    </HeaderContainer>
  );
}

export default Header;
