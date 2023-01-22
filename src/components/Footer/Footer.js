import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
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
        <FooterLinksContainer>
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
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              gus7avo
            </SocialLogo>
            <WebsiteRights>
              gus7avo @ {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
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
              <SocialIconLink href="/" target="_blank" aria-label="Mail">
                <FaMailBulk />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
