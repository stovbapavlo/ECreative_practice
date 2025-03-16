import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import SubmitButton from '../SubmitButton';
import mail from '../../assets/icons/Mail.png';
import phone from '../../assets/icons/Phone.png';

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
  register,
  errors,
  socialNetworks,
  setSocialNetworks,
  selectedCode,
  typedPhone,
  email,
}) => {
  const handleAddSocialNetwork = () => {
    const newSocialNetworks = [
      ...socialNetworks,
      { id: Date.now().toString(), network: '', profile: '' },
    ];
    setSocialNetworks(newSocialNetworks);
  };

  const handleSocialNetworkChange = (id: string, field: string, value: string) => {
    const updatedNetworks = socialNetworks.map((network) =>
      network.id === id ? { ...network, [field]: value } : network,
    );
    setSocialNetworks(updatedNetworks);
  };

  return (
    <div className="form-group">
      <div className="name-input">
        <div className="contacts-section">
          <h3>Contacts</h3>
          <p>These contacts are used to inform about orders</p>
          <div className="contacts-data">
            <img src={mail} alt="" />
            <p>{email}</p>
          </div>
          <div className="contacts-data">
            <img src={phone} alt="" />
            <p>
              {selectedCode} {typedPhone}
            </p>
          </div>
        </div>

        <div className="social-network-section">
          <h3>Social network</h3>
          <p>Indicate the desired communication method</p>

          {socialNetworks.map((network) => (
            <div key={network.id} className="social-network-input">
              <select
                value={network.network}
                onChange={(e) => handleSocialNetworkChange(network.id, 'network', e.target.value)}
                className="input-field">
                <option value="">Select a network</option>
                <option value="Skype">Skype</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>
              <input
                type="text"
                placeholder={`@profile`}
                value={network.profile}
                onChange={(e) => handleSocialNetworkChange(network.id, 'profile', e.target.value)}
                className="input-field"
              />
            </div>
          ))}

          <button type="button" className="add-more-button" onClick={handleAddSocialNetwork}>
            + Add More
          </button>
        </div>
      </div>

      <SubmitButton label="Go Next →" disabled={false} />
    </div>
  );
};

export default Step2;
