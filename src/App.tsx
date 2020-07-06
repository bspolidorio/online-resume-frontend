import React, { useEffect, useState } from "react";
import api from "./services/api";
import Project from "./components/Project";

interface IProject {
  name: string;
  description: string;
}

function App() {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    api.get<IProject[]>("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <div className="App">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}

export default App;
