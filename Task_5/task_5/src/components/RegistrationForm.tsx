import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "../styles/RegistrationForm.scss";

import vector from "../assets/icons/Vector.png";
import logo from "../assets/icons/Logo.png";

const phoneSchema = z.object({
  phone: z.string().min(10, "Enter a valid phone number"),
  code: z.optional(z.string()),
  email: z.optional(z.string().email("Invalid email format")),
  password: z.optional(z.string().min(6, "Password must be at least 6 characters")),
});

const countryCodes = ["+1", "+44", "+49", "+380", "+33", "+91", "+81"];

const RegistrationForm = ({ onNext, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedCode, setSelectedCode] = useState("+1");
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(phoneSchema),
  });

  const onSubmit = (data) => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (data.code === "1234") {
        setStep(3);
      } else {
        alert("Invalid verification code");
      }
    } else if (step === 3) {
      onNext();
    }
  };

  return (
    <>
      <div className="global-header">
        <div className="company-name">
          <img src={logo} alt="company-logo" className="company-logo" />
          COMPANY NAME
        </div>
        <button className="close-button" onClick={onClose}>✖</button>
      </div>
      <div className="registration-form">
        <div className="progress-indicator">
          <span className={`circle ${step >= 1 ? "active" : ""}`}></span>
          <span className={`progress-line ${step >= 2 ? "active" : ""}`}></span>
          <span className={`circle ${step >= 2 ? "active" : ""}`}></span>
          <span className={`progress-line ${step >= 3 ? "active" : ""}`}></span>
          <span className={`circle ${step >= 3 ? "active" : ""}`}></span>
        </div>
        <h2 className="title">Registration</h2>
        <p className="description">Fill in the registration data. It will take a couple of minutes.
        All you need is a phone number and e-mail.
        </p>
        <div className="privacy-notice">
          <img src={vector} alt="Privacy Icon" className="privacy-icon" />
          <p>We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
          <button className="close-notice" onClick={() => document.querySelector('.privacy-notice').style.display = 'none'}>✖</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          {step === 1 && (
            <div className="form-group">
            <div className="phone-input">
              <label className="phone-label">Enter your phone number</label>
              <div className="phone-wrapper">
                <select className="phone-code" value={selectedCode} onChange={(e) => setSelectedCode(e.target.value)}>
                  {countryCodes.map((code) => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
                <input type="tel" {...register("phone")} placeholder="555 555-1234" className="input-field" />
              </div>
            </div>
            {errors.phone && <p className="error-message">{errors.phone.message}</p>}
            <button type="submit" className="submit-button gray">Send Code</button>
          </div>          
          )}
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
