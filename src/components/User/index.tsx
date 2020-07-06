import React from "react";
import { Container } from "./styles";
import { IUser } from "../../services/types";

interface Props {
  users: IUser[];
}

const User: React.FC<Props> = ({ users }) => {
  return (
    <Container>
      {users.map((user) => (
        <div>
          <strong>Name:</strong> {user.name}
          <strong>Email:</strong> {user.email}
          <strong>Phone:</strong> {user.phone}
          <strong>Location:</strong> {user.location}
          <strong>About:</strong> {user.about}
        </div>
      ))}
    </Container>
  );
};

export default User;
