import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SidebarSocialLink,
  // SidebarRoute,
  // SideBtnWrap,
} from "./SidebarStyles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Sobre
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            Habilidades
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Projetos
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contato
          </SidebarLink>
          <SidebarSocialLink
            href="//www.linkedin.com/in/gustavo-nascimento-dos-santos/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </SidebarSocialLink>
          <SidebarSocialLink
            href="//www.github.com/guus7avo"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub />
          </SidebarSocialLink>
          <SidebarSocialLink
            href="//mailto:ps.gustavo19@gmail.com"
            target="_blank"
            aria-label="Mail"
          >
            <FiMail />
          </SidebarSocialLink>
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarSocialLink
            href="//www.linkedin.com/in/gustavo-nascimento-dos-santos/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </SidebarSocialLink>
          <SidebarSocialLink
            href="//www.github.com/guus7avo"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub />
          </SidebarSocialLink>
          <SidebarSocialLink
            href="//mailto:ps.gustavo19@gmail.com"
            target="_blank"
            aria-label="Mail"
          >
            <FiMail />
          </SidebarSocialLink>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
