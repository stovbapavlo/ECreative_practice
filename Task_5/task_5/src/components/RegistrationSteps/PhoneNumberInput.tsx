import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface PhoneNumberInputProps {
  selectedCode: string;
  setSelectedCode: (code: string) => void;
  countryCodes: string[];
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  selectedCode,
  setSelectedCode,
  countryCodes,
  register,
  errors,
}) => {
  return (
    <div className="input-wrapper">
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
      
      {errors.phone && <p className="notification-error">{errors.phone.message}</p>}
    </div>
  );
};

export default PhoneNumberInput;
