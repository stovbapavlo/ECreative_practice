import { UseFormRegister, FieldErrors } from 'react-hook-form';
import SocialNetworkSection from './SocialNetworkSection';
import SubmitButton from '../SubmitButton';
import ContactsSection from './ContactsSection';

interface Step2Props {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  socialNetworks: { id: string; network: string; profile: string }[];
  setSocialNetworks: (networks: { id: string; network: string; profile: string }[]) => void;
  selectedCode: string;
  typedPhone: string;
  email: string;
}

const Step2: React.FC<Step2Props> = ({
  socialNetworks,
  setSocialNetworks,
  selectedCode,
  typedPhone,
  email,
}) => {
  return (
    <div className="form-group">
      <div className="input-wrapper">
        <ContactsSection email={email} selectedCode={selectedCode} typedPhone={typedPhone}/>

        <SocialNetworkSection 
          socialNetworks={socialNetworks} 
          setSocialNetworks={setSocialNetworks} 
        />
      </div>

      <SubmitButton label="Go Next →" disabled={false} />
    </div>
  );
};

export default Step2;
