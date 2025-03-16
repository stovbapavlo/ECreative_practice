import { useState, useContext, useEffect } from 'react';
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
    .min(9, 'Enter a valid phone number')
    .regex(/^\d+$/, 'Phone number must contain only digits'),
  code: z.optional(z.string()),
  email: z.optional(z.string().email('Invalid email format')),
  password: z.optional(passwordSchema),
});

const countryCodes = ['+1', '+44', '+49', '+380', '+33', '+91', '+81'];

const RegistrationForm = ({ onNext, onClose }) => {
  const { step, nextStep, prevStep } = useFormSteps(1, 3);
  const [privacyVisible, setPrivacyVisible] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { formData, setFormData } = useContext(FormContext);

  const selectedCode = formData.selectedCode || countryCodes[0];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(phoneSchema),
    defaultValues: formData,
  });

  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  const handleCodeChange = (code) => {
    setFormData((prev) => ({ ...prev, selectedCode: code }));
  };
  useEffect(() => {
    if (step > 1) {
      setPrivacyVisible(false);
    }
  }, [step]);

  const onSubmit = (data) => {
    if (step === 1) {
      setFormData((prev) => ({
        ...prev,
        phone: data.phone,
        selectedCode,
      }));
      nextStep();
    } else if (step === 2) {
      if (data.code === '1234') {
        nextStep();
      } else {
        alert('Invalid verification code');
      }
    } else if (step === 3) {
      setFormData((prev) => ({
        ...prev,
        email: data.email,
      }));
      onNext();
    }
  };
  const handleClose = () => {
    localStorage.removeItem('formData');
    setFormData({});
    window.location.reload();
  };
  return (
    <>
      <Header onClose={handleClose} />

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
              setSelectedCode={handleCodeChange}
              countryCodes={countryCodes}
            />
          )}
          {step === 2 && (
            <Step2
              register={register}
              errors={errors}
              typedPhone={watch('phone') || ''}
              selectedCode={selectedCode}
              handleEditPhone={prevStep}
              handleResendCode={() => alert('Code re-sent!')}
            />
          )}
          {step === 3 && (
            <Step3
              register={register}
              watch={watch}
              errors={errors}
              showPassword={showPassword}
              typedPhone={watch('phone') || ''}
              setShowPassword={setShowPassword}
              selectedCode={selectedCode}
            />
          )}
        </FormContainer>
      </div>
    </>
  );
};

export default RegistrationForm;
