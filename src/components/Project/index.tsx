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
          <strong>Name:</strong> {project.name} <br />
          <strong>Description:</strong> {project.description} <br />
          <strong>Live:</strong> {project.live} <br />
          <strong>Code:</strong> {project.code} <br />
          <br />
        </div>
      ))}
    </Container>
  );
};

export default Project;
