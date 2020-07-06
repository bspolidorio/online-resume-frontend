import React, { useEffect, useState } from "react";
import api from "./services/api";
import Project from "./components/Project";
import User from "./components/User";
import Specialization from "./components/Specialization";

interface IProject {
  name: string;
  description: string;
  code?: string;
  live?: string;
}

interface IUser {
  name: string;
  email: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
  about?: string;
}

interface ISpecialization {
  name: string;
}

function App() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [specialization, setSpecialization] = useState<ISpecialization[]>([]);

  useEffect(() => {
    api.get<IUser[]>("/users").then((response) => {
      setUsers(response.data);
    });
    api.get<IProject[]>("/projects").then((response) => {
      setProjects(response.data);
    });
    api.get<ISpecialization[]>("/specializations").then((response) => {
      setSpecialization(response.data);
    });
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <User key={user.name} user={user} />
      ))}
      <p>Specializations: </p>
      {specialization.map((specialization) => (
        <Specialization
          key={specialization.name}
          specialization={specialization}
        />
      ))}
      <p>Projects: </p>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}

export default App;
