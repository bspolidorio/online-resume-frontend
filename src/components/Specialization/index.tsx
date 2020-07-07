import React from "react";
import * as S from "./styles";
import { ISpecialization } from "../../services/types";

interface Props {
  specializations: ISpecialization[];
}

const Specialization: React.FC<Props> = ({ specializations }) => {
  return (
    <S.Container>
      <p>Specializations: </p>
      <S.SpecializationList>
        {specializations.map((specialization) => (
          <li>{specialization}</li>
        ))}
      </S.SpecializationList>
    </S.Container>
  );
};

export default Specialization;
