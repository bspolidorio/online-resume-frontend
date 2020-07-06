import React from "react";

interface IProject {
  name: string;
  description: string;
}

interface Props {
  project: IProject;
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <strong>Name:</strong> {project.name} <br />
      <strong>Description:</strong> {project.description} <br />
      <br />
    </div>
  );
};

export default Project;
