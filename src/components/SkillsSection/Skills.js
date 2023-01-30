import React, { useState } from "react";
import { Button } from "../ButtonStyled";
import Content from "../ContentSection/Content";
import { frameworks, languages, others } from "../ContentSection/ContentData";
import {
  ButtonWrapper,
  SkillsContainer,
  SkillsWrapper,
  Title,
} from "./SkillsStyled";

const Skills = () => {
  const [displayLanguages, setDisplayLanguages] = useState(true);
  const [displayFrameworks, setDisplayFrameworks] = useState(false);
  const [displayOthers, setDisplayOthers] = useState(false);

  const showLanguages = () => {
    setDisplayLanguages(true);
    setDisplayFrameworks(false);
    setDisplayOthers(false);
  };
  const showFrameworks = () => {
    setDisplayLanguages(false);
    setDisplayFrameworks(true);
    setDisplayOthers(false);
  };
  const showOthers = () => {
    setDisplayLanguages(false);
    setDisplayFrameworks(false);
    setDisplayOthers(true);
  };

  return (
    <>
      <SkillsContainer id="skills">
        <SkillsWrapper>
          <Title>Minhas habilidades</Title>
          <ButtonWrapper>
            <Button to="languages" onClick={showLanguages}>
              Linguagens
            </Button>
            <Button to="frameworks" onClick={showFrameworks}>
              Frameworks
            </Button>
            <Button to="others" onClick={showOthers}>
              Outros
            </Button>
          </ButtonWrapper>

          {displayLanguages && <Content {...languages} id="languages" />}
          {displayFrameworks && <Content {...frameworks} />}
          {displayOthers && <Content {...others} />}
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default Skills;
