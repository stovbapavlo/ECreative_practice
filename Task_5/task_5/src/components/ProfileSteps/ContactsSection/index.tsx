import mail from '../../../assets/icons/Mail.png';
import phone from '../../../assets/icons/Phone.png';

import './ContactsSection.scss'

interface ContactsSectionProps {
  email: string;
  selectedCode: string;
  typedPhone: string;
}

const ContactsSection: React.FC<ContactsSectionProps> = ({ email, selectedCode, typedPhone }) => {
  return (
    <div className="contacts-section">
      <h3 className="heading-common">Contacts</h3>
      <p className="text-common">These contacts are used to inform about orders</p>
      <div className="contacts-data">
        <img src={mail} alt="Email icon" />
        <p>{email}</p>
      </div>
      <div className="contacts-data">
        <img src={phone} alt="Phone icon" />
        <p>
          {selectedCode} {typedPhone}
        </p>
      </div>
    </div>
  );
};

export default ContactsSection;
