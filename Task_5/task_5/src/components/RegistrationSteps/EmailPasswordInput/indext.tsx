import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';

import eyeIcon from '../../../assets/icons/eyeIcon.png';
import './EmailPasswordInput.scss'

interface EmailPasswordInputProps {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  errors: FieldErrors<any>;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

const getPasswordStrengthMessage = (password: string, errors: FieldErrors<any>) => {
  if (!password) return '';
  const errorMessage = errors.password?.message;
  return typeof errorMessage === 'string' ? errorMessage : 'Good password';
};

const EmailPasswordInput: React.FC<EmailPasswordInputProps> = ({
  register,
  watch,
  errors,
  showPassword,
  setShowPassword,
}) => {
  const password = watch('password') || '';

  return (
    <div className="input-wrapper">
      <label>Enter your email</label>
      <div className="phone-wrapper">
        <input type="email" placeholder="alex_manager@gmail.com" {...register('email')} className="input-field" />
      </div>
      {errors.email && <p className="notification-error">{errors.email.message}</p>}

      <label className="phone-label">Set a password</label>
      <div className="phone-wrapper password-wrapper">
        <input type={showPassword ? 'text' : 'password'} placeholder="●●●●●●" {...register('password')} className="input-field" />
        <button type="button" className="toggle-password-btn" onClick={() => setShowPassword(!showPassword)}>
          <img src={eyeIcon} alt="toggle" />
        </button>
      </div>
      {password && (
        <p className="password-strength" style={{ color: errors.password ? 'red' : 'green' }}>
          {getPasswordStrengthMessage(password, errors)}
        </p>
      )}
    </div>
  );
};

export default EmailPasswordInput;
