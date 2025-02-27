import RegistrationForm from './pages/RegistrationForm';
import ProfileInfoForm from './pages/ProfileInfoForm';

import { createContext, useState } from 'react';

export const FormContext = createContext({});

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <div className="app-container">
        {/* <ProfileInfoForm onNext={() => setStep(3)} /> */}
        {step === 1 && <RegistrationForm onNext={() => setStep(2)} />}
        {step === 2 && <ProfileInfoForm onNext={() => setStep(3)} />}
      </div>
    </FormContext.Provider>
  );
}

export default App;
