import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import SubmitButton from '../SubmitButton';

interface Step1Props {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  selectedCode: string;
  setSelectedCode: (code: string) => void;
  countryCodes: string[];
}

const Step1: React.FC<Step1Props> = ({
  register,
  errors,
  selectedCode,
  setSelectedCode,
  countryCodes,
}) => {
  return (
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

      <SubmitButton label="Send Code" disabled={false} />
    </div>
  );
};

export default Step1;
