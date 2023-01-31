import React, { useEffect, useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaMoon } from "react-icons/fa";
import { FiMail, FiSun } from "react-icons/fi";
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

const Navbar = ({ toggle, toggleTheme, isDarkTheme }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isToggled, setIsToggled] = useState(isDarkTheme);

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

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            guus7avo
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
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
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Habilidades
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projetos
              </NavLinks>
            </NavItem>
            <NavItem></NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              href="//www.linkedin.com/in/gustavo-nascimento-dos-santos/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </NavBtnLink>
            <NavBtnLink
              href="//www.github.com/guus7avo"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </NavBtnLink>
            <NavBtnLink
              href="//mail.google.com/mail/u/0/#inbox?compose=CllgCJNstWzmNKcZfZtszWpMtHWBHZWlLzFMspNKsbVPfSqGmfrmsrXfFmTvWmSglSRSdhjRhpL"
              target="_blank"
              aria-label="Mail"
            >
              <FiMail />
            </NavBtnLink>
            <NavBtnLink checked={isToggled} onClick={onToggle}>
              {isDarkTheme === true ? <FiSun /> : <FaMoon />}
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
