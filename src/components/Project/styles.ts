import styled from "styled-components";
import { device } from "../../styles/GlobalStyles";

export const Container = styled.div`
  padding: 30px 0px;
  margin: 0 auto;
  background-color: var(--darkblue);
  color: var(--darkblue);
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  @media ${device.mobile} {
    padding-left: 0px;
  }
`;

export const ProjectsTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  background-color: var(--lightblue);
  width: 150px;
  padding: 3px 0px;
  margin-bottom: 15px;
  border-radius: 8px;
  text-align: center;
  color: var(--gray);
  @media ${device.mobile} {
    margin: 0 auto;
  }
`;

export const Separator = styled.div`
  width: 570px;
  border-bottom: 2px solid var(--lightblue);
  margin-bottom: 20px;
  @media ${device.mobile} {
    display: none;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 80px;
  @media ${device.mobile} {
    padding: 30px;
  }
`;

export const Card = styled.div`
  display: grid;
  width: 300px;
  grid-template-rows: 210px 80px;
  grid-template-areas: "text" "stats";
  border-radius: 18px;
  background: var(--white);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin: 30px;

  .card-text {
    grid-area: text;
    margin: 25px;
  }
  .card-text p {
    color: grey;
    font-size: 14px;
    font-weight: 300;
    padding: 10px 10px;
  }
  .card-text h2 {
    margin-top: 10px;
    font-size: 22px;
  }
  .card-stats {
    grid-area: stats;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background: var(--lightblue);
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    padding: 10px;
    text-decoration: none;
  }
`;
