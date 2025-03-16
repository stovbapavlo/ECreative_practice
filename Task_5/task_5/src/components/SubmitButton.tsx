import React from 'react';

interface SubmitButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variable?: 'default' | 'prime';
  icon?: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  disabled = false,
  onClick,
  type = 'submit',
  variable = 'default',
  icon,
}) => {
  return (
    <button
      type={type}
      className={`submit-button ${disabled ? 'gray' : ''} ${
        variable === 'prime' ? 'prime-button' : ''
      }`}
      disabled={disabled}
      onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  );
};

export default SubmitButton;
