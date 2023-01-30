import React, { useState } from "react";
import { Button } from "../ButtonStyled";
import Dev from "../../images/memoji-dev.png";
import {
  ArrowDown,
  ArrowDownward,
  HeroButtonWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroIcon,
  HeroP,
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
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            Saiba mais {hover ? <ArrowDownward /> : <ArrowDown />}
          </Button>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
