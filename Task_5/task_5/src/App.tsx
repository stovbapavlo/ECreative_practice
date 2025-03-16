import RegistrationForm from './pages/RegistrationForm';
import ProfileInfoForm from './pages/ProfileInfoForm';
import { createContext, useState, useMemo, useEffect } from 'react';

export const FormContext = createContext({
  formData: {},
  setFormData: (data: any) => {},
});

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleNextStep = () => setStep((prev) => prev + 1);

  const formContextValue = useMemo(() => ({ formData, setFormData }), [formData]);

  return (
    <FormContext.Provider value={formContextValue}>
      <div className="app-container">
        {step === 1 && <RegistrationForm onNext={handleNextStep} onClose={() => {}} />}
        {step === 2 && <ProfileInfoForm onNext={handleNextStep} />}
      </div>
    </FormContext.Provider>
  );
}

export default App;
