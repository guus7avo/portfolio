import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: black;
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
  background: black;
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
  color: white;
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
  color: white;
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

export const ArrowFoward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HeroIcon = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
  border: 2px solid #0362fc;
  border-radius: 100px;
`;
