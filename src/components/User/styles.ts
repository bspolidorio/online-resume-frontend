import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  padding: 40px 80px;
  margin: 0 auto;
  background-color: var(--gray);
`;

export const UserName = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--darkblue);
`;

export const Position = styled.h2`
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--darkblue);
`;

export const AboutMe = styled.div`
  padding: 20px 0px 20px 50px;
  margin: 0 auto;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const AboutLeft = styled.div`
  min-width: 200px;
`;

export const AboutTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  background-color: var(--darkblue);
  width: 150px;
  padding: 3px 0px;
  margin-bottom: 15px;
  transform: skew(-20deg);
  text-align: center;
  color: var(--gray);
`;

export const Email = styled.a`
  padding: 2px 0px;
  font-size: 14px;
  text-decoration: none;
  color: var(--black);
`;
export const Phone = styled.p`
  padding: 2px 0px;
  font-size: 14px;
`;
export const Location = styled.p`
  padding: 2px 0px;
  font-size: 14px;
`;
export const Github = styled.a`
  padding: 2px 0px;
  font-size: 30px;
  text-decoration: none;
  color: var(--darkblue);
`;
export const Linkedin = styled.a`
  padding: 2px 10px;
  font-size: 30px;
  text-decoration: none;
  color: var(--darkblue);
`;

export const AboutRight = styled.div``;

export const Separator = styled.div`
  margin: 15px 0px 30px;
  width: 570px;
  border-bottom: 2px solid var(--lightblue);
  position: relative;
  float: right;
`;

export const AboutText = styled.p`
  max-width: 550px;
  margin: 20px 20px 20px 0px;
  font-size: 14px;
  line-height: 20px;
`;
