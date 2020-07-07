import React, { useEffect, useState } from "react";
import api from "./services/api";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { IUser } from "./services/types";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <Layout users={users} />
      <GlobalStyles />
    </>
  );
}

export default App;
