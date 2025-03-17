import React from 'react';
import logo from '../../assets/icons/Logo.png';
import './Header.scss';
import close from '../../assets/icons/Close.png';

interface HeaderProps {
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClose }) => {
  return (
    <div className="global-header">
      <div className="company-name">
        <img src={logo} alt="company-logo" className="company-logo" />
        COMPANY NAME
      </div>
      <button className="close-button" onClick={onClose}>
        <img src={close} alt="close" />
      </button>
    </div>
  );
};

export default Header;
