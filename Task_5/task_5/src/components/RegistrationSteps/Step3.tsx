import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

import SubmitButton from '../SubmitButton';

import eyeIcon from '../../assets/icons/eyeIcon.png';

interface Step3Props {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  isPasswordGood: boolean;
  selectedCode: string;
  typedPhone: string;
}

const Step3: React.FC<Step3Props> = ({
  register,
  errors,
  showPassword,
  setShowPassword,
  isPasswordGood,
  selectedCode,
  typedPhone,
}) => {
  return (
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
            onClick={() => setShowPassword(!showPassword)}>
            <img src={eyeIcon} alt="toggle" />
          </button>
        </div>
        {errors.password && <p className="error-message">{errors.password.message}</p>}
        <p className="password-strength" style={{ color: isPasswordGood ? 'green' : 'red' }}>
          {isPasswordGood ? 'Good password' : ''}
        </p>
      </div>

      <SubmitButton label="Register Now" disabled={false} />
    </div>
  );
};

export default Step3;
