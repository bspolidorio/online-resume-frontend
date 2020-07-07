import styled from "styled-components";
import { device } from "../../styles/GlobalStyles";

export const Container = styled.div``;

export const Header = styled.div`
  padding: 40px 80px;
  margin: 0 auto;
  background-color: var(--gray);
  @media ${device.mobile} {
    padding: 20px 30px;
  }
`;

export const UserName = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--darkblue);
  @media ${device.mobile} {
    font-size: 40px;
    text-align: center;
  }
`;

export const Position = styled.h2`
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--darkblue);
  @media ${device.mobile} {
    font-size: 10px;
    text-align: center;
  }
`;

export const AboutMe = styled.div`
  padding: 20px 0px 20px 50px;
  margin: 0 auto;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${device.mobile} {
    padding: 30px;
    padding-bottom: 0px;
  }
`;

export const AboutLeft = styled.div`
  min-width: 200px;
  @media ${device.mobile} {
    margin: 0 auto;
    text-align: center;
  }
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
  @media ${device.mobile} {
    margin: 0 auto 10px;
  }
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

export const AboutRight = styled.div`
  @media ${device.mobile} {
    margin: 0 auto;
  }
`;

export const Separator = styled.div`
  margin: 15px 0px 30px;
  width: 570px;
  border-bottom: 2px solid var(--lightblue);
  position: relative;
  float: right;
  @media ${device.mobile} {
    width: 310px;
  }
`;

export const AboutText = styled.p`
  max-width: 550px;
  margin: 20px 20px 20px 0px;
  font-size: 14px;
  line-height: 20px;
  @media ${device.mobile} {
    max-width: 300px;
    text-align: justify;
    margin: 0 auto;
  }
`;
