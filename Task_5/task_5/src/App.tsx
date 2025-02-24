import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
//import ProfileInfoForm from "./components/ProfileInfoForm";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="app-container">
      {step === 1 ? (
        <RegistrationForm onNext={() => setStep(2)} />
      ) : (
        <h1>Profile</h1>
      )}
    </div>
  );
}

export default App;
