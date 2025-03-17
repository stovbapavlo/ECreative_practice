import { UseFormRegister, FieldErrors } from 'react-hook-form';
import SubmitButton from '../SubmitButton';
import PhoneNumberInput from './PhoneNumberInput';

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
      <PhoneNumberInput 
      selectedCode={selectedCode}
      setSelectedCode={setSelectedCode} 
      countryCodes={countryCodes} 
      register={register} 
      errors={errors}/>

      <SubmitButton label="Send Code" disabled={false} />
    </div>
  );
};

export default Step1;
