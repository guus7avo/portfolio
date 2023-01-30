import styled from "styled-components";

export const SkillsContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.primary};

  @media screen and (max-width: 768px) {
    height: 1400px;
  }

  @media screen and (max-width: 480px) {
    height: 1400px;
  }
`;

export const SkillsWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.secondary};
  text-align: center;
  margin-bottom: 64px;

  @media screen and (max-width: 420px) {
    font-size: 2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 90px;
  align-items: center;
  margin-top: 20px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 50px;
    grid-gap: 50px;
  }
`;
