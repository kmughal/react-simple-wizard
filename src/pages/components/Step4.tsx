import React from 'react';
import { StepsProps } from '../../../bin';

const Step4: React.FC<StepsProps> = ({ state, setState }) => {
  setInterval(() => setState(new Date()), 100);

  return (
    <>
      <h2>A simple digital clock</h2>
      <p>{(state ?? new Date()).toLocaleTimeString()}</p>
    </>
  );
};

export default Step4;
