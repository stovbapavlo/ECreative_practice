import { UseFormRegister, FieldErrors } from 'react-hook-form';

import PhoneVerification from './PhoneVerification';
import PhoneStatus from './PhoneStatus';
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
       <PhoneStatus
        selectedCode={selectedCode}
        typedPhone={typedPhone}
        handleEditPhone={handleEditPhone}
      />

    <PhoneVerification register={register} errors={errors} handleResendCode={handleResendCode}/>

      <SubmitButton label="Confirm" disabled={false} />
    </div>
  );
};

export default Step2;
