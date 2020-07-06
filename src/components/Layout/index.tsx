import React from "react";
import { Grid } from "./styles";
import Project from "../Project";
import User from "../User";
import Specialization from "../Specialization";
import { IProject, ISpecialization, IUser } from "../../services/types";

interface Props {
  users: IUser[];
  projects: IProject[];
  specializations: ISpecialization[];
}

const Layout: React.FC<Props> = ({ users, specializations, projects }) => {
  return (
    <Grid>
      <User users={users} />
      <Specialization specializations={specializations} />
      <Project projects={projects} />
    </Grid>
  );
};

export default Layout;
