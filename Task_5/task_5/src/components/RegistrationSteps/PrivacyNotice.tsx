import React from 'react';
import vector from '../../assets/icons/Vector.png';

import './PrivacyNotice.scss';

interface PrivacyNoticeProps {
  onClose: () => void;
}

const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({ onClose }) => {
  return (
    <div className="privacy-notice">
      <img src={vector} alt="Privacy Icon" className="privacy-icon" />
      <p>
        We take privacy issues seriously. You can be sure that your personal data is securely
        protected.
      </p>
      <button className="close-notice" onClick={onClose}>
        ✖
      </button>
    </div>
  );
};

export default PrivacyNotice;
