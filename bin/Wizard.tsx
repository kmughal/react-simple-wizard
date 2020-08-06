import React from 'react';
import { StepsProps, NavigationsProps, WizardProps } from '.';
import Navigations from './Navigations';

const Wizard: React.FC<{ wizardProps: WizardProps }> = ({ wizardProps }) => {
  const totalSteps = wizardProps.steps.length;

  const [current, setCurrent] = React.useState(0);
  const [showNextLink, setShowNextLink] = React.useState(true);
  const [showPreviousLink, setShowPreviousLink] = React.useState(false);

  const states = [];
  wizardProps.steps.forEach((_) => states.push(React.useState(null)));

  const [state, setState] = states[current];

  const goToStep = (stepIndex: number) => {
    if (stepIndex < 0) {
      console.error(`${stepIndex} is not valid.It must be >=0`);
      return;
    } else if (stepIndex >= wizardProps.steps.length) {
      console.error(`${stepIndex} is not valid. It must be >${totalSteps - 1}`);
      return;
    }
    if (stepIndex >= totalSteps - 1) {
      setShowNextLink(false);
      setShowPreviousLink(true);
    } else if (stepIndex <= 0) {
      setShowNextLink(true);
      setShowPreviousLink(false);
    } else {
      setShowNextLink(true);
      setShowPreviousLink(true);
    }

    setCurrent(stepIndex);
  };

  const getAllStates = (): Array<Record<string, any>> => {
    const result = new Array<Record<string, any>>();

    states.forEach((item, index) => {
      result.push({ [`step${index}`]: item[0] });
    });

    return result;
  };

  const stepArgs: StepsProps = { state, setState, goToStep, getAllStates };
  const step = wizardProps.steps[current];
  const navigationsArgs: NavigationsProps = {
    current,
    setCurrent,
    totalComponents: totalSteps,
    showNextLink,
    showPreviousLink,
    goToStep,
  };

  return (
    <section>
      {wizardProps.showHeading && wizardProps.heading && (
        <h1>{wizardProps.heading}</h1>
      )}
      {wizardProps.showNavigationLinks &&
        wizardProps.showNavigationOrientation === 'top' && (
          <Navigations navigationsProps={navigationsArgs} />
        )}
      {step(stepArgs)}
      {wizardProps.showNavigationLinks &&
        wizardProps.showNavigationOrientation === 'bottom' && (
          <Navigations navigationsProps={navigationsArgs} />
        )}
    </section>
  );
};

export default Wizard;
