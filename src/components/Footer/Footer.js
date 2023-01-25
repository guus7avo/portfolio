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
  // FooterLink,
  // FooterLinksContainer,
  // FooterLinksItems,
  // FooterLinksWrapper,
  // FooterLinkTitle,
  // WebsiteRights,
} from "./FooterStyled";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Título</FooterLinkTitle>
              <FooterLink to="/">One</FooterLink>
              <FooterLink to="/">Two</FooterLink>
              <FooterLink to="/">Three</FooterLink>
              <FooterLink to="/">Four</FooterLink>
              <FooterLink to="/">Five</FooterLink>
              <FooterLink to="/">Six</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Título</FooterLinkTitle>
              <FooterLink to="/">One</FooterLink>
              <FooterLink to="/">Two</FooterLink>
              <FooterLink to="/">Three</FooterLink>
              <FooterLink to="/">Four</FooterLink>
              <FooterLink to="/">Five</FooterLink>
              <FooterLink to="/">Six</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Título</FooterLinkTitle>
              <FooterLink to="/">One</FooterLink>
              <FooterLink to="/">Two</FooterLink>
              <FooterLink to="/">Three</FooterLink>
              <FooterLink to="/">Four</FooterLink>
              <FooterLink to="/">Five</FooterLink>
              <FooterLink to="/">Six</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Título</FooterLinkTitle>
              <FooterLink to="/">One</FooterLink>
              <FooterLink to="/">Two</FooterLink>
              <FooterLink to="/">Three</FooterLink>
              <FooterLink to="/">Four</FooterLink>
              <FooterLink to="/">Five</FooterLink>
              <FooterLink to="/">Six</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              guus7avo
            </SocialLogo>
            {/* <WebsiteRights>{new Date().getFullYear()}</WebsiteRights> */}
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
                href="//mailto:ps.gustavo19@gmail.com"
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
