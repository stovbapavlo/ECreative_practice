import React from 'react';
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';

import SubmitButton from '../SubmitButton';

import eyeIcon from '../../assets/icons/eyeIcon.png';

interface Step3Props {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  errors: FieldErrors<any>;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  selectedCode: string;
  typedPhone: string;
}

const getPasswordStrengthMessage = (password: string, errors: FieldErrors<any>) => {
  if (!password) return '';
  const errorMessage = errors.password?.message;
  if (typeof errorMessage === 'string') {
    return errorMessage;
  }
  return 'Good password';
};

const Step3: React.FC<Step3Props> = ({
  register,
  watch,
  errors,
  showPassword,
  setShowPassword,
  selectedCode,
  typedPhone,
}) => {
  const password = watch('password') || '';
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
        {password && (
          <p className="password-strength" style={{ color: errors.password ? 'red' : 'green' }}>
            {getPasswordStrengthMessage(password, errors)}
          </p>
        )}
      </div>

      <SubmitButton label="Register Now" disabled={false} variable="prime" />
    </div>
  );
};

export default Step3;
