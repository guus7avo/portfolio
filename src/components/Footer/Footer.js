import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterStyled";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              guus7avo
            </SocialLogo>
            <WebsiteRights>ps.gustavo19@gmail.com</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.linkedin.com/in/gustavo-nascimento-dos-santos/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="//www.github.com/guus7avo"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="//mail.google.com/mail/u/0/#inbox?compose=CllgCJNstWzmNKcZfZtszWpMtHWBHZWlLzFMspNKsbVPfSqGmfrmsrXfFmTvWmSglSRSdhjRhpL"
                target="_blank"
                aria-label="Mail"
              >
                <FiMail />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
