import pen from '../../../assets/icons/pen.png';

import './PhoneStatus.scss'

interface PhoneStatusProps {
  selectedCode: string;
  typedPhone: string;
  isConfirmed?: boolean;
  handleEditPhone?: () => void;
}

const PhoneStatus: React.FC<PhoneStatusProps> = ({
  selectedCode,
  typedPhone,
  isConfirmed = false,
  handleEditPhone,
}) => {
  return (
    <div className={`phone-confirmation ${isConfirmed ? 'success' : ''}`}>
      <div className="phone-display">
        <p className="phone-display-number">
          {selectedCode} {typedPhone}
        </p>
        <span className="phone-display-status">
          {isConfirmed ? (
            <>
              <span className="checkmark">✓</span> Number confirmed
            </>
          ) : (
            'Number not confirmed yet'
          )}
        </span>
      </div>
      {!isConfirmed && handleEditPhone && (
        <button type="button" className="phone-edit-button" onClick={handleEditPhone}>
          <img src={pen} alt="Edit" />
        </button>
      )}
    </div>
  );
};

export default PhoneStatus;
