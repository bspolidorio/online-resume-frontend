import React from "react";

interface ISpecialization {
  name: string;
}

interface Props {
  specialization: ISpecialization;
}

const Specialization: React.FC<Props> = ({ specialization }) => {
  return (
    <div>
      <strong>- </strong> {specialization.name} <br />
      <br />
    </div>
  );
};

export default Specialization;
