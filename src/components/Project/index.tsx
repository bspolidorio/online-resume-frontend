import React from "react";
import * as S from "./styles";
import { IProject } from "../../services/types";

interface Props {
  projects: IProject[];
}

const Project: React.FC<Props> = ({ projects }) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.ProjectsTitle>Projects</S.ProjectsTitle>
        <S.Separator />
      </S.TitleContainer>
      <S.CardsContainer>
        {projects.map((project) => (
          <S.Card>
            <div className="card-text">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
            <div className="card-stats">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </div>
          </S.Card>
        ))}
      </S.CardsContainer>
    </S.Container>
  );
};

export default Project;
