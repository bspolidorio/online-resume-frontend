import React from "react";
import * as S from "./styles";
import { IUser } from "../../services/types";

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <S.Container>
      <S.Header>
        <S.UserName>{user.name}</S.UserName>
        <S.Position>Frontend Developer</S.Position>
      </S.Header>
      <S.AboutMe>
        <S.AboutLeft>
          <S.AboutTitle>About me</S.AboutTitle>
          <S.Email href={"mailto:" + user.email}>{user.email}</S.Email>
          <S.Phone>{user.phone}</S.Phone>
          <S.Location>{user.location}</S.Location>
          <S.Github
            href={user.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </S.Github>
          <S.Linkedin
            href={user.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </S.Linkedin>
        </S.AboutLeft>
        <S.AboutRight>
          <S.Separator />
          <S.AboutText>{user.about}</S.AboutText>
          <S.Separator />
        </S.AboutRight>
      </S.AboutMe>
    </S.Container>
  );
};

export default User;
