import styled from "styled-components";
import { MdArrowDownward, MdKeyboardArrowDown } from "react-icons/md";

export const HeroContainer = styled.div`
  background: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${(props) => props.theme.primary};
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: ${(props) => props.theme.secondary};
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 0px;
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowDownward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HeroIcon = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 100px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => props.theme.alternative};
    border: 2px solid ${(props) => props.theme.alternative};
  }
`;
