import React from "react";
import { Grid } from "./styles";
import Project from "../Project";
import User from "../User";
import Specialization from "../Specialization";
import { IUser } from "../../services/types";

interface Props {
  users: IUser[];
}

const Layout: React.FC<Props> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <Grid>
          <User key={user.name} user={user} />
          <Specialization
            key={user.projects[1].name}
            specializations={user.specializations}
          />
          <Project key={user.projects[0].name} projects={user.projects} />
        </Grid>
      ))}
    </>
  );
};

export default Layout;
