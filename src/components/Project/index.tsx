import React from "react";
import { Container } from "./styles";
import { IProject } from "../../services/types";

interface Props {
  projects: IProject[];
}

const Project: React.FC<Props> = ({ projects }) => {
  return (
    <Container>
      {projects.map((project) => (
        <div>
          <p>{project.name}</p>
          <p>{project.description}</p>
          <p>{project.code}</p>
          <p>{project.live}</p>
        </div>
      ))}
    </Container>
  );
};

export default Project;
