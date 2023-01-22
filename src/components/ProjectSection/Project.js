import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/car.svg";
import {
  ProjectCard,
  ProjectContainer,
  ProjectH1,
  ProjectH2,
  ProjectIcon,
  ProjectP,
  ProjectWrapper,
} from "./ProjectStyles";

const Project = () => {
  return (
    <ProjectContainer id="projetos">
      <ProjectH1>Meus Projetos</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={Icon1} />
          <ProjectH2>Subtítulo 1</ProjectH2>
          <ProjectP>Descrição dos projetos 1</ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon2} />
          <ProjectH2>Subtítulo 2</ProjectH2>
          <ProjectP>Descrição dos projetos 2</ProjectP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon1} />
          <ProjectH2>Subtítulo 3</ProjectH2>
          <ProjectP>Descrição dos projetos 3</ProjectP>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
