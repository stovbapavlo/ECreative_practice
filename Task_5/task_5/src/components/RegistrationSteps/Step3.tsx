import React from 'react';
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';

import SubmitButton from '../SubmitButton';
import PhoneStatus from './PhoneStatus';
import EmailPasswordInput from './EmailPasswordInput/indext';

interface Step3Props {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  errors: FieldErrors<any>;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  selectedCode: string;
  typedPhone: string;
}

const Step3: React.FC<Step3Props> = ({
  register,
  watch,
  errors,
  showPassword,
  setShowPassword,
  selectedCode,
  typedPhone,
}) => {
  return (
    <div className="form-group">
      <PhoneStatus selectedCode={selectedCode} typedPhone={typedPhone} isConfirmed />

      <EmailPasswordInput
        register={register}
        errors={errors}
        watch={watch}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <SubmitButton label="Register Now" disabled={false} variable="prime" />
    </div>
  );
};

export default Step3;
