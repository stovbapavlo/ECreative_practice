import RegistrationForm from './pages/RegistrationForm';
import ProfileInfoForm from './pages/ProfileInfoForm';

import { createContext, useState, useMemo, useCallback } from 'react';

export const FormContext = createContext({
  typedPhone: '',
  setTypedPhone: (phone: string) => {},
  email: '',
  setEmail: (email: string) => {},
});

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [typedPhone, setTypedPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCode, setSelectedCode] = useState('+1');

  const formContextValue = useMemo(
    () => ({ typedPhone, setTypedPhone, email, setEmail, selectedCode, setSelectedCode }),
    [typedPhone, email, selectedCode],
  );

  const handleNextStep = useCallback(() => setStep((prev) => prev + 1), []);

  return (
    <FormContext.Provider value={formContextValue}>
      <div className="app-container">
        {step === 1 && <RegistrationForm onNext={handleNextStep} onClose={() => {}} />}
        {step === 2 && (
          <ProfileInfoForm
            onNext={handleNextStep}
            typedPhone={typedPhone}
            email={email}
            selectedCode={selectedCode}
          />
        )}
      </div>
    </FormContext.Provider>
  );
}

export default App;
