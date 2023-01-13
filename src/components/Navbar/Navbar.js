import React from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Gustavo</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="sobre">Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="habilidades">Habilidades</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projetos">Projetos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projetos">Projetos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contato">Contato</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink>
              <FaLinkedin />
            </NavBtnLink>
            <NavBtnLink>
              <FaGithub />
            </NavBtnLink>
            <NavBtnLink>
              <FiMail />
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
