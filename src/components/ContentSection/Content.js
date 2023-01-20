import React from "react";
import { Button } from "../ButtonStyled";
import {
  ButtonWrapper,
  Column1,
  Column2,
  ContentContainer,
  ContentRow,
  ContentWrapper,
  Heading,
  Img,
  ImgWrap,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./ContentStyles";

const Content = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <ContentContainer id={id} lightBg={lightBg}>
        <ContentWrapper>
          <ContentRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <ButtonWrapper>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </ButtonWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ContentRow>
        </ContentWrapper>
      </ContentContainer>
    </>
  );
};

export default Content;
