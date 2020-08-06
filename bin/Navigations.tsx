import React from 'react';
import { NavigationsProps } from '.';
const Navigations: React.FC<{ navigationsProps: NavigationsProps }> = ({
  navigationsProps,
}) => {
  const {
    current,
    setCurrent,
    showPreviousLink,
    showNextLink,
    goToStep,
  } = navigationsProps;

  const navigate = (goTo: number) => {
    const newCurrent = current + goTo;
    setCurrent(newCurrent);
    goToStep(newCurrent);
  };

  return (
    <div>
      {showPreviousLink && (
        <a href="#" onClick={(_) => navigate(-1)}>
          Previous
        </a>
      )}
      {'    '}
      {showNextLink && (
        <a href="#" onClick={(_) => navigate(1)}>
          Next
        </a>
      )}
    </div>
  );
};

export default Navigations;
