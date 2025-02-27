import React from 'react';

interface FormContainerProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form-container">
      {children}
    </form>
  );
};

export default FormContainer;
