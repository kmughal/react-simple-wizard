export default interface StepsProps {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  goToStep: (stepIndex: number) => void;
  getAllStates: () => Array<Record<string, any>>;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}
