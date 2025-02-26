import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import ProfileInfoForm from './components/ProfileInfoForm';
//import AdditionalDetailsForm from './components/AdditionalDetailsForm';

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="app-container">
      <ProfileInfoForm onNext={() => setStep(3)} />
      {/* {step === 1 && <RegistrationForm onNext={() => setStep(2)} />} */}
      {/* {step === 2 && <ProfileInfoForm onNext={() => setStep(3)} />} */}
      {/* {step === 3 && <AdditionalDetailsForm onNext={() => console.log('Done!')} />} */}
    </div>
  );
}

export default App;
