import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 50px 20px;
  margin: 0 auto;
  background-color: var(--white);
  position: relative;
`;

export const SpecializationsTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  background-color: var(--darkblue);
  width: 220px;
  padding: 3px 0px;
  margin-bottom: 15px;
  transform: skew(-20deg);
  text-align: center;
  color: var(--gray);
  position: absolute;
  top: -65px;
`;

export const SpecializationList = styled.ul`
  columns: 2;
  padding: 0px 0px 30px 100px;
  list-style-type: none;
  li {
    padding: 3px 0px;
  }
`;
