import React from "react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaMoon } from "react-icons/fa";
import { FiMail, FiSun } from "react-icons/fi";
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

const Sidebar = ({ isOpen, toggle, toggleTheme, isDarkTheme }) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

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
            href="//mail.google.com/mail/u/0/#inbox?compose=CllgCJNstWzmNKcZfZtszWpMtHWBHZWlLzFMspNKsbVPfSqGmfrmsrXfFmTvWmSglSRSdhjRhpL"
            target="_blank"
            aria-label="Mail"
          >
            <FiMail />
          </SidebarSocialLink>
          <SidebarSocialLink checked={isToggled} onClick={onToggle}>
            {isDarkTheme === true ? <FiSun /> : <FaMoon />}
          </SidebarSocialLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
