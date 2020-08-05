import React from 'react';
import { StepsProps, NavigationsProps } from '.';
import Navigations from './Navigations';

const Wizard = (components: Array<React.FC<StepsProps>>) => {
  const [current, setCurrent] = React.useState(0);

  const states = [];
  components.forEach((_) => states.push(React.useState(null)));

  const [state, setState] = states[current];

  const componentArg: StepsProps = { state, setState };
  const component = components[current];
  const navigationsArgs: NavigationsProps = {
    current,
    setCurrent,
    totalComponents: components.length,
  };

  return (
    <>
      <Navigations navigationsProps={navigationsArgs} />
      {component(componentArg)}
    </>
  );
};

export default Wizard;
