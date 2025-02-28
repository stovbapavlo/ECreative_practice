import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header';
import ProgressIndicator from '../components/ProgressIndicator/ProgressIndicator';
import FormHeader from '../components/FormHeasder/FormHeader';
import Step1 from '../components/ProfileSteps/Step1';
import Step2 from '../components/ProfileSteps/Step2';
import useFormSteps from '../hooks/useFormSteps';
import '../styles/ProfileInfoForm.scss';
import FormContainer from '../components/FormContainer';

interface ProfileInfoFormProps {
  onNext: () => void;
  typedPhone: string;
  email: string;
  selectedCode: string;
}

const ProfileInfoForm: React.FC<ProfileInfoFormProps> = ({
  onNext,
  typedPhone,
  email,
  selectedCode,
}) => {
  console.log('ProfileInfoForm received:', { typedPhone, email });
  const { step, nextStep, prevStep } = useFormSteps(1, 3);
  const [countries, setCountries] = useState<{ value: string; label: string }[]>([]);
  const [cities, setCities] = useState<{ value: string; label: string }[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<{ value: string; label: string } | null>(
    null,
  );
  const [selectedCity, setSelectedCity] = useState<{ value: string; label: string } | null>(null);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [agreed, setAgreed] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [cityError, setCityError] = useState<string | null>(null);
  const [socialNetworks, setSocialNetworks] = useState<
    { id: string; network: string; profile: string }[]
  >([]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setValue('dateOfBirth', date);
  };

  const handleCountryChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption);
    setSelectedCity(null);
    setCities([]);
    setCityError(null);

    if (selectedOption) {
      setIsLoadingCities(true);
      axios
        .get(
          `https://countriesnow.space/api/v0.1/countries/cities/q?country=${encodeURIComponent(
            selectedOption.label,
          )}`,
        )
        .then((response) => {
          if (response.data.data && response.data.data.length > 0) {
            const cityOptions = response.data.data.map((city: string) => ({
              value: city,
              label: city,
            }));
            setCities(cityOptions);
          } else {
            setCityError('No cities found for this country.');
          }
        })
        .catch((error) => {
          console.error('Error fetching cities:', error);
          setCityError('Failed to load cities. Please try again later.');
        })
        .finally(() => setIsLoadingCities(false));
    }
  };

  const onSubmit = (data: any) => {
    console.log('Profile Info:', {
      ...data,
      country: selectedCountry?.label,
      city: selectedCity?.label,
    });
    nextStep();
  };

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const sortedCountries = response.data
          .map((country: any) => ({
            value: country.cca2,
            label: country.name.common,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

        setCountries(sortedCountries);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  return (
    <>
      <Header onClose={() => setStep(1)} />

      <div className="profile-form">
        <ProgressIndicator currentStep={step} totalSteps={3} />

        <FormHeader
          title="Profile Info"
          description="Fill in the data for profile. It will take a couple of minutes. You only need a passport."
        />

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <Step1
              register={register}
              setValue={setValue}
              agreed={agreed}
              setAgreed={setAgreed}
              countries={countries}
              cities={cities}
              selectedCountry={selectedCountry}
              selectedCity={selectedCity}
              isLoadingCities={isLoadingCities}
              cityError={cityError}
              handleCountryChange={handleCountryChange}
              handleCityChange={(selectedOption) => setSelectedCity(selectedOption)}
              handleDateChange={handleDateChange}
            />
          )}
          {step === 2 && (
            <Step2
              register={register}
              errors={errors}
              socialNetworks={socialNetworks}
              setSocialNetworks={setSocialNetworks}
              selectedCode={selectedCode}
              typedPhone={typedPhone}
              email={email}
            />
          )}
          {step === 3 && <h1>Step 3</h1>}
        </FormContainer>
      </div>
    </>
  );
};

export default ProfileInfoForm;
