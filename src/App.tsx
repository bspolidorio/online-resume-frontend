import React, { useEffect, useState } from "react";
import api from "./services/api";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { IProject, ISpecialization, IUser } from "./services/types";

function App() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [specializations, setSpecializations] = useState<ISpecialization[]>([]);

  useEffect(() => {
    api.get<IUser[]>("/users").then((response) => {
      setUsers(response.data);
    });
    api.get<IProject[]>("/projects").then((response) => {
      setProjects(response.data);
    });
    api.get<ISpecialization[]>("/specializations").then((response) => {
      setSpecializations(response.data);
    });
  }, []);

  return (
    <>
      <Layout
        users={users}
        specializations={specializations}
        projects={projects}
      />
      <GlobalStyles />
    </>
  );
}

export default App;
