import React from 'react';
import { NavigationsProps } from '.';
const Navigations: React.FC<{ navigationsProps: NavigationsProps }> = ({
  navigationsProps,
}) => {
  const { current, setCurrent, totalComponents } = navigationsProps;
  const [showNextLink, setShowNextLink] = React.useState(true);
  const [showPreviousLink, setShowPreviousLink] = React.useState(false);

  const navigate = (goTo: number) => {
    let newCurrent = current + goTo;

    if (newCurrent >= totalComponents - 1) {
      setShowNextLink(false);
      setShowPreviousLink(true);
      newCurrent = totalComponents - 1;
    } else if (newCurrent <= 0) {
      setShowNextLink(true);
      setShowPreviousLink(false);
      newCurrent = 0;
    } else {
      setShowNextLink(true);
      setShowPreviousLink(true);
    }
    setCurrent(newCurrent);
  };

  return (
    <>
      {showPreviousLink && (
        <button onClick={(_) => navigate(-1)}>Previous</button>
      )}
      {showNextLink && <button onClick={(_) => navigate(1)}>Next</button>}
    </>
  );
};

export default Navigations;
