import React from 'react';
import './FormHeader.scss';

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, description }) => {
  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </>
  );
};

export default FormHeader;
