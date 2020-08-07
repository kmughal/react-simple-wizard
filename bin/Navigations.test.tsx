import React from '../node_modules/react';
import { fireEvent, render } from '@testing-library/react';

import { NavigationsProps } from '.';
import Navigations from './Navigations';
describe('Navigations Component tests', () => {
  let current, setCurrent;

  beforeEach(() => {
    current = 0;
    setCurrent = jest.fn();
  });
  it('showNextLink is false then next button should not appear', async () => {
    const props: NavigationsProps = {
      current,
      setCurrent,
      goToStep: jest.fn(),
      totalComponents: 0,
      showNextLink: false,
      showPreviousLink: true,
    };

    const { getByText } = render(<Navigations navigationsProps={props} />);
    expect(() => getByText('Next')).toThrow();
  });

  it('showPreviousLink is false then previous button should not appear', async () => {
    const props: NavigationsProps = {
      current,
      setCurrent,
      goToStep: jest.fn(),
      totalComponents: 0,
      showNextLink: true,
      showPreviousLink: false,
    };

    const { getByText } = render(<Navigations navigationsProps={props} />);
    expect(() => getByText('Previous')).toThrow();
  });

  it('showPreviousLink & goToNextStep are false then no navigation should appear', async () => {
    const props: NavigationsProps = {
      current,
      setCurrent,
      goToStep: jest.fn(),
      totalComponents: 0,
      showNextLink: false,
      showPreviousLink: false,
    };

    const { getByText } = render(<Navigations navigationsProps={props} />);
    expect(() => getByText('Previous')).toThrow();
    expect(() => getByText('Next')).toThrow();
  });
});
