import React, { useState } from "react";
import { Button } from "../ButtonStyled";
import Dev from "../../images/memoji-dev.png";
import video from "./../../videos/video.mp4";
import {
  ArrowFoward,
  ArrowRight,
  HeroBackground,
  HeroButtonWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroIcon,
  HeroP,
  VideoBackground,
} from "./HeroStyled";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroIcon src={Dev} />
        <HeroH1>Oi, eu sou o Gustavo</HeroH1>
        <HeroP>Desenvolvedor web, front-end e back-end.</HeroP>
        <HeroButtonWrapper>
          {/* <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button> */}
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
