import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '../components/Header/Header';
import Step1 from '../components/RegistrationSteps/Step1';
import Step2 from '../components/RegistrationSteps/Step2';
import Step3 from '../components/RegistrationSteps/Step3';
import ProgressIndicator from '../components/ProgressIndicator/ProgressIndicator';
import FormContainer from '../components/FormContainer';
import FormHeader from '../components/FormHeasder/FormHeader';
import useFormSteps from '../hooks/useFormSteps';
import PrivacyNotice from '../components/RegistrationSteps/PrivacyNotice';
import '../styles/ProfileInfoForm.scss';
import { FormContext } from '../App';

const passwordSchema = z
  .string()
  .min(6, 'Password must be at least 6 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[!@#$%^&*]/, 'Password must contain at least one special character');

const phoneSchema = z.object({
  phone: z
    .string()
    .min(10, 'Enter a valid phone number')
    .regex(/^\d+$/, 'Phone number must contain only digits'),
  code: z.optional(z.string()),
  email: z.optional(z.string().email('Invalid email format')),
  password: z.optional(passwordSchema),
});

const countryCodes = ['+1', '+44', '+49', '+380', '+33', '+91', '+81'];

interface RegistrationFormProps {
  onNext: () => void;
  onClose: () => void;
  setTypedPhone: (phone: string) => void;
  setEmail: (email: string) => void;
  setSelectedCode: (seletedCode: string) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onNext, onClose }) => {
  const { setTypedPhone, setEmail, selectedCode, setSelectedCode } = useContext(FormContext);
  const { step, nextStep, prevStep } = useFormSteps(1, 3);
  const [privacyVisible, setPrivacyVisible] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof phoneSchema>>({
    resolver: zodResolver(phoneSchema),
  });

  const passwordValue = watch('password') || '';
  const isPasswordGood = passwordValue.length >= 6;
  const email = watch('email') || '';
  const phone = watch('phone') || '';

  const handleClosePrivacy = () => {
    setPrivacyVisible(false);
  };

  const handleEditPhone = () => {
    prevStep();
  };

  const handleResendCode = () => {
    alert('Code re-sent!');
  };

  const onSubmit = (data: z.infer<typeof phoneSchema>) => {
    if (step === 1) {
      setTypedPhone(data.phone);
      console.log('Typed Phone:', data.phone);
      nextStep();
      setPrivacyVisible(false);
    } else if (step === 2) {
      if (data.code === '1234') {
        nextStep();
      } else {
        alert('Invalid verification code');
      }
    } else if (step === 3) {
      setEmail(data.email);
      console.log('Email:', data.email);
      onNext();
    }
  };

  return (
    <>
      <Header onClose={onClose} />

      <div className="profile-form">
        <ProgressIndicator currentStep={step} totalSteps={3} />

        <FormHeader
          title="Registration"
          description="Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail."
        />

        {privacyVisible && <PrivacyNotice onClose={() => setPrivacyVisible(false)} />}

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <Step1
              register={register}
              errors={errors}
              selectedCode={selectedCode}
              setSelectedCode={setSelectedCode}
              countryCodes={countryCodes}
            />
          )}
          {step === 2 && (
            <Step2
              register={register}
              errors={errors}
              typedPhone={phone}
              selectedCode={selectedCode}
              handleEditPhone={prevStep}
              handleResendCode={() => alert('Code re-sent!')}
            />
          )}
          {step === 3 && (
            <Step3
              register={register}
              errors={errors}
              showPassword={showPassword}
              typedPhone={phone}
              setShowPassword={setShowPassword}
              isPasswordGood={isPasswordGood}
              selectedCode={selectedCode}
            />
          )}
        </FormContainer>
      </div>
    </>
  );
};

export default RegistrationForm;
