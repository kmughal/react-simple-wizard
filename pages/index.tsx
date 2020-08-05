import React from 'react';
import StepsProps from '../bin/Steps.Props';
import Wizard from '../bin/Wizard';

const Step1: React.FC<StepsProps> = (props) => {
  return <h1>Start</h1>;
};

const Step2: React.FC<StepsProps> = (props) => {
  return <h1>Step 2</h1>;
};

const Step3: React.FC<StepsProps> = (props) => {
  return <h1>Step 3</h1>;
};

const IndexPage = () => {
  return (
    <>
      <h1>Simple Stateful Wizard Example</h1>
      {Wizard([
        Step1,
        Step2,
        Step3,
        (props) => {
          return <h1>Step 4</h1>;
        },
        (props) => {
          return <h1>Step 5</h1>;
        },
        (props) => {
          return <h1>Step 6</h1>;
        },
        (props) => {
          return <h1>Step 7</h1>;
        },
        (props) => {
          return <h1>Step 8</h1>;
        },
        (props) => {
          return <h1>Step 9</h1>;
        },
        (props) => {
          return <h1>Step 10</h1>;
        },
        (props) => {
          return <h1>Finsih</h1>;
        },
      ])}
    </>
  );
};

export default IndexPage;
