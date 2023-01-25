import React from "react";
import Resitech from "../../images/resitech.jpg";
import Pokeball from "../../images/pokeball.png";
import Book from "../../images/book.png";
import {
  ProjectCard,
  ProjectContainer,
  ProjectH1,
  ProjectH2,
  ProjectIcon,
  ProjectP,
  ProjectWrapper,
} from "./ProjectStyles";
import { ButtonWrapper } from "../ContentSection/ContentStyles";
import { Button } from "../ButtonStyled";

const Project = ({ buttonLabel, primary, dark, dark2 }) => {
  return (
    <ProjectContainer id="projects">
      <ProjectH1>Meus Projetos</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={Resitech} />
          <ProjectH2>Resitech Solid Surface</ProjectH2>
          <ProjectP>
            Site estático para exibição dos produtos e serviços da empresa
            Resitech.
          </ProjectP>
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
              Acessar
            </Button>
          </ButtonWrapper>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Pokeball} />
          <ProjectH2>Pokedex</ProjectH2>
          <ProjectP>
            Projeto que simula a Pokedex, dispositivo existente no anime
            Pokemon.
          </ProjectP>
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
              Acessar
            </Button>
          </ButtonWrapper>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Book} />
          <ProjectH2>Marcador de Livros</ProjectH2>
          <ProjectP>
            Site para facilitar a organização dos seus livros de interesse.
          </ProjectP>
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
              Acessar
            </Button>
          </ButtonWrapper>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
