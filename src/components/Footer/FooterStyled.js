import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.primary};
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${(props) => props.theme.secondary};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme.alternative};
    transition: 0.2s ease-in-out;
  }
`;

export const WebsiteRights = styled.small`
  color: ${(props) => props.theme.secondary};
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: ${(props) => props.theme.secondary};
  font-size: 24px;

  &:hover {
    color: ${(props) => props.theme.alternative};
    transition: 0.2s ease-in-out;
  }
`;
