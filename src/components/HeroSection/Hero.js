import React, { useState } from "react";
import { Button } from "../ButtonStyled";
import video from "./../../videos/video.mp4";
import {
  ArrowFoward,
  ArrowRight,
  HeroBackground,
  HeroButtonWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
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
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroH1>Oi, eu sou o Gustavo</HeroH1>
        <HeroP>
          Sign up for a new account today and recieve $250 in credits towards
          your next payment.
        </HeroP>
        <HeroButtonWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
