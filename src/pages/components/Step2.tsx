import React from 'react';
import { StepsProps } from '../../../bin';

const Step2: React.FC<StepsProps> = ({ state, setState }) => {
  return (
    <>
      <h2>A simple counter {state ?? 0}</h2>
      <button
        onClick={(e) => {
          setState(1 + (state ?? 0));
        }}
      >
        +
      </button>
    </>
  );
};
export default Step2;
