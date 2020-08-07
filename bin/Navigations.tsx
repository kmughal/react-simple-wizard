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

  if (!showPreviousLink && !showNextLink) {
    return null;
  }

  return (
    <ul>
      {showPreviousLink && (
        <li>
          <a href="#" onClick={(_) => navigate(-1)}>
            Previous
          </a>
        </li>
      )}
      {'    '}
      {showNextLink && (
        <li>
          <a href="#" onClick={(_) => navigate(1)}>
            Next
          </a>
        </li>
      )}
    </ul>
  );
};

export default Navigations;
