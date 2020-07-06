import React from "react";

interface IUser {
  name: string;
  email: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
  about?: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Name:</strong> {user.name} <br />
      <strong>Email:</strong> {user.email} <br />
      <strong>Phone:</strong> {user.phone} <br />
      <strong>Location:</strong> {user.location} <br />
      <strong>About:</strong> {user.about} <br />
      <br />
    </div>
  );
};

export default User;
