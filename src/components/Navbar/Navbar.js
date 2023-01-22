import React, { useEffect, useState } from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

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

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Gustavo
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="sobre"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sobre
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="habilidades"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-81}
                >
                  Habilidades
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="projetos"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Projetos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contato"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contato
                </NavLinks>
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
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
