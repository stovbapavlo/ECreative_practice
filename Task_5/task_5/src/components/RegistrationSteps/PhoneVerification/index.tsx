import { UseFormRegister, FieldErrors } from 'react-hook-form';
import reSend from '../../../assets/icons/resend.png';

import './PhoneVerification.scss';

interface PhoneVerificationProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  handleResendCode: () => void;
}

const PhoneVerification: React.FC<PhoneVerificationProps> = ({
  register,
  errors,
  handleResendCode,
}) => {
  return (
    <div className="phone-verification">
      <label className="code-label" htmlFor="confirmationCode">
        Confirmation code
      </label>
      <div className="code-input">
        <div className="code-wrapper">
          <input
            id="confirmationCode"
            type="text"
            placeholder="– – – –"
            {...register('code')}
            className="input-field"
            maxLength={4}
          />
          <p className="code-subtext">Confirm phone number with code from SMS message</p>
        </div>
        <button type="button" className="resend-button" onClick={handleResendCode}>
          <img src={reSend} alt="Resend" className="resend-img" />
          Send again
        </button>

        {errors.code && <p className="notification-error">{errors.code.message}</p>}
      </div>
    </div>
  );
};

export default PhoneVerification;
