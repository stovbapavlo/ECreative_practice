import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import '../styles/RegistrationForm.scss';

import vector from '../assets/icons/Vector.png';
import logo from '../assets/icons/Logo.png';
import eyeIcon from '../assets/icons/eyeIcon.png';
import pen from '../assets/icons/pen.png';

const phoneSchema = z.object({
  phone: z.string().min(10, 'Enter a valid phone number'),
  code: z.optional(z.string()),
  email: z.optional(z.string().email('Invalid email format')),
  password: z.optional(z.string().min(6, 'Password must be at least 6 characters')),
});

const countryCodes = ['+1', '+44', '+49', '+380', '+33', '+91', '+81'];

interface RegistrationFormProps {
  onNext: () => void;
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onNext, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedCode, setSelectedCode] = useState('+1');
  const [privacyVisible, setPrivacyVisible] = useState(true);

  const [typedPhone, setTypedPhone] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof phoneSchema>>({
    resolver: zodResolver(phoneSchema),
  });

  const passwordValue = watch('password') || '';
  const isPasswordGood = passwordValue.length >= 6;

  const handleClosePrivacy = () => {
    setPrivacyVisible(false);
  };
  const handleEditPhone = () => {
    setStep(1);
  };
  const handleResendCode = () => {
    alert('Code re-sent!');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: z.infer<typeof phoneSchema>) => {
    if (step === 1) {
      setTypedPhone(data.phone);
      setStep(2);
      setPrivacyVisible(false);
    } else if (step === 2) {
      if (data.code === '1234') {
        setStep(3);
      } else {
        alert('Invalid verification code');
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
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
      </div>

      <div className="registration-form">
        <div className="progress-indicator">
          <span className={`circle ${step >= 1 ? 'active' : ''}`}></span>
          <span className={`progress-line ${step >= 2 ? 'active' : ''}`}></span>
          <span className={`circle ${step >= 2 ? 'active' : ''}`}></span>
          <span className={`progress-line ${step >= 3 ? 'active' : ''}`}></span>
          <span className={`circle ${step >= 3 ? 'active' : ''}`}></span>
        </div>

        <h2 className="title">Registration</h2>
        <p className="description">
          Fill in the registration data. It will take a couple of minutes.
          <br />
          All you need is a phone number and e-mail.
        </p>

        {privacyVisible && (
          <div className="privacy-notice">
            <img src={vector} alt="Privacy Icon" className="privacy-icon" />
            <p>
              We take privacy issues seriously. You can be sure that your personal data is securely
              protected.
            </p>
            <button className="close-notice" onClick={handleClosePrivacy}>
              ✖
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          {step === 1 && (
            <div className="form-group">
              <div className="phone-input">
                <label className="phone-label">Enter your phone number</label>
                <div className="phone-wrapper">
                  <select
                    className="phone-code"
                    value={selectedCode}
                    onChange={(e) => setSelectedCode(e.target.value)}>
                    {countryCodes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    placeholder="555 555-1234"
                    {...register('phone')}
                    className="input-field"
                  />
                </div>
              </div>
              {errors.phone && <p className="error-message">{errors.phone.message}</p>}

              <button type="submit" className="submit-button gray">
                Send Code
              </button>
            </div>
          )}
          {step === 2 && (
            <div className="form-group">
              <div className="phone-confirmation">
                <div className="phone-display">
                  <p className="phone-display-number">
                    {selectedCode} {typedPhone}
                  </p>
                  <span className="phone-display-status">Number not confirmed yet</span>
                </div>
                <button type="button" className="phone-edit-button" onClick={handleEditPhone}>
                  <img src={pen} alt="pen" />
                </button>
              </div>

              <div className="code-input">
                <label className="code-label" htmlFor="confirmationCode">
                  Confirmation code
                </label>
                <div className="code-wrapper">
                  <input
                    id="confirmationCode"
                    type="text"
                    placeholder="– – – –"
                    {...register('code')}
                    className="input-field"
                    maxLength={4}
                  />
                  <button type="button" className="resend-button" onClick={handleResendCode}>
                    Send again
                  </button>
                </div>
                <p className="code-subtext">Confirm phone number with code from sms message</p>
              </div>

              {errors.code && <p className="error-message">{errors.code.message}</p>}

              <button type="submit" className="submit-button gray">
                Confirm
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="form-group">
              <div className="phone-confirmation success">
                <div className="phone-display">
                  <p className="phone-display-number">
                    {selectedCode} {typedPhone}
                  </p>
                  <span className="phone-display-status">
                    <span className="checkmark">✓</span> Number confirmed
                  </span>
                </div>
              </div>
              <div className="phone-input">
                <label className="phone-label">Enter your email</label>
                <div className="phone-wrapper">
                  <input
                    type="email"
                    placeholder="alex_manager@gmail.com"
                    {...register('email')}
                    className="input-field"
                  />
                </div>
                {errors.email && <p className="error-message">{errors.email.message}</p>}
              </div>
              <div className="phone-input">
                <label className="phone-label">Set a password</label>
                <div className="phone-wrapper password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="●●●●●●"
                    {...register('password')}
                    className="input-field"
                  />
                  <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={toggleShowPassword}>
                    <img src={showPassword ? eyeIcon : eyeIcon} alt="toggle" />
                  </button>
                </div>
                {errors.password && <p className="error-message">{errors.password.message}</p>}
                <p
                  className="password-strength"
                  style={{ color: isPasswordGood ? 'green' : 'red' }}>
                  {isPasswordGood ? 'Good password' : ''}
                </p>
              </div>

              <button type="submit" className="submit-button gray">
                Register Now
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
