import React from 'react';
import './ProgressIndicator.scss';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="progress-indicator">
      {Array.from({ length: totalSteps }, (_, index) => (
        <React.Fragment key={index}>
          <span className={`circle ${currentStep >= index + 1 ? 'active' : ''}`}></span>
          {index < totalSteps - 1 && (
            <span className={`progress-line ${currentStep >= index + 2 ? 'active' : ''}`}></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressIndicator;
