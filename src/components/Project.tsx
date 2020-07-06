import React from "react";

interface IProject {
  name: string;
  description: string;
  code?: string;
  live?: string;
}

interface Props {
  project: IProject;
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <strong>Name:</strong> {project.name} <br />
      <strong>Description:</strong> {project.description} <br />
      <strong>Live:</strong> {project.live} <br />
      <strong>Code:</strong> {project.code} <br />
      <br />
    </div>
  );
};

export default Project;
