import React from "react";
import Resitech from "../../images/resitech.jpg";
import Pokeball from "../../images/pokeball.png";
import Book from "../../images/book.png";
import {
  ButtonWrapper,
  ProjectCard,
  ProjectContainer,
  ProjectH1,
  ProjectH2,
  ProjectIcon,
  ProjectP,
  ProjectWrapper,
} from "./ProjectStyles";
import { ButtonProject } from "../ButtonStyled";
import { FaGithub, FaLaptop } from "react-icons/fa";

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
            Resitech. Conta com imagens e inspirações de pedidos, junto com
            links para realizar contato e solicitar orçamento.
          </ProjectP>
          <ButtonWrapper>
            <ButtonProject
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}
              href="//www.resitechsolidsurface.com.br"
              target="_blank"
              aria-label="Resitech"
            >
              <FaLaptop />
            </ButtonProject>
            <ButtonProject
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}
              href="//www.github.com/guus7avo/resitech"
              target="_blank"
              aria-label="Resitech-Github"
            >
              <FaGithub />
            </ButtonProject>
          </ButtonWrapper>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Pokeball} />
          <ProjectH2>Pokedex</ProjectH2>
          <ProjectP>
            Clone de um projeto que simula a Pokedex, dispositivo utilizado no
            anime Pokemon para saber o nome, tipo e outras informações dos
            Pokemons.
          </ProjectP>
          <ButtonWrapper>
            <ButtonProject
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
              <FaLaptop />
            </ButtonProject>
            <ButtonProject
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}
              href="//www.github.com/guus7avo/pokedex"
              target="_blank"
              aria-label="Pokedex-Github"
            >
              <FaGithub />
            </ButtonProject>
          </ButtonWrapper>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Book} />
          <ProjectH2>Marcador de Livros</ProjectH2>
          <ProjectP>
            Site para facilitar a organização dos seus livros de interesse. Além
            de salvar o nome dos livros e autores, também é possível marcar os
            livros que já foram lidos e os que ainda serão.
          </ProjectP>
          <ButtonWrapper>
            <ButtonProject
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}
              href="//sistema-livros.firebaseapp.com"
              target="_blank"
              aria-label="Marcador-de-Livros"
            >
              <FaLaptop />
            </ButtonProject>
            <ButtonProject
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={primary ? 1 : 0}
              dark={dark ? 1 : 0}
              dark2={dark2 ? 1 : 0}
              href="//www.github.com/guus7avo/sistema-livros"
              target="_blank"
              aria-label="Marcador-de-Livros-Github"
            >
              <FaGithub />
            </ButtonProject>
          </ButtonWrapper>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
