import { useState } from 'react';

const useFormSteps = (initialStep: number, totalSteps: number) => {
  const [step, setStep] = useState(initialStep);

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return { step, nextStep, prevStep };
};

export default useFormSteps;
