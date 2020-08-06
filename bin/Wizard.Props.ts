import { StepsProps } from '.';

export default interface WizardProps {
  steps: Array<React.FC<StepsProps>>;
  showNavigationLinks?: boolean;
  showNavigationOrientation?: 'top' | 'bottom';
  showHeading?: boolean;
  heading?: string;
}
