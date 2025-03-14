import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

import pen from '../../assets/icons/pen.png';
import reSend from '../../assets/icons/resend.png';

import SubmitButton from '../SubmitButton';

interface Step2Props {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  typedPhone: string;
  selectedCode: string;
  handleEditPhone: () => void;
  handleResendCode: () => void;
}

const Step2: React.FC<Step2Props> = ({
  register,
  errors,
  typedPhone,
  selectedCode,
  handleEditPhone,
  handleResendCode,
}) => {
  return (
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
            <img src={reSend} alt="re-send" className="resend-img" />
            Send again
          </button>
        </div>
        <p className="code-subtext">Confirm phone number with code from sms message</p>
      </div>

      {errors.code && <p className="error-message">{errors.code.message}</p>}

      <SubmitButton label="Confirm" disabled={false} />
    </div>
  );
};

export default Step2;
