import React from 'react';

interface SubmitButtonProps {
  label: string;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, disabled = false }) => {
  return (
    <button type="submit" className={`submit-button ${disabled ? 'gray' : ''}`} disabled={disabled}>
      {label}
    </button>
  );
};

export default SubmitButton;
