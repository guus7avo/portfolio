import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.primary};

  @media screen and (max-width: 1000px) {
    height: 1500px;
  }

  @media screen and (max-width: 480px) {
    height: 1400px;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 999px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectCard = styled.div`
  background: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid 1px ${(props) => props.theme.secondary};
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectIcon = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 10px;
`;

export const ProjectH1 = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.secondary};
  margin-bottom: 64px;

  @media screen and (max-width: 420px) {
    font-size: 2rem;
  }
`;

export const ProjectH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: ${(props) => props.theme.secondary};
`;

export const ProjectP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${(props) => props.theme.secondary};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;
