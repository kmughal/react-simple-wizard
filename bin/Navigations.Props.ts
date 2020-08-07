export default interface NaviationsProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  totalComponents: number;
  showNextLink: boolean;
  showPreviousLink: boolean;
  goToStep: (stepIndex: number) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}
