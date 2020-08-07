import React from 'react';
import { WizardProps } from '../../dist/cjs';
import Wizard from '../../bin/Wizard';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

const IndexPage = () => {
  const wizardProps: WizardProps = {
    showNavigationOrientation: 'bottom',
    showNavigationLinks: true,
    steps: [
      Step1,
      Step2,
      Step3,
      Step4,
      (props) => {
        return (
          <>
            <h1>Complete your review</h1>
            <pre>{JSON.stringify(props.getAllStates(), null, 2)}</pre>
          </>
        );
      },
    ],
  };
  return (
    <>
      <h1>Simple Stateful Wizard Example</h1>
      <Wizard wizardProps={wizardProps} />
    </>
  );
};

export default IndexPage;
