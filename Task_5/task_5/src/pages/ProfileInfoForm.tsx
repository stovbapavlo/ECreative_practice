import { useForm } from 'react-hook-form';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProgressIndicator from '../components/ProgressIndicator/ProgressIndicator';
import FormHeader from '../components/FormHeader';
import Step1 from '../components/ProfileSteps/Step1';
import Step2 from '../components/ProfileSteps/Step2';
import Step3 from '../components/ProfileSteps/Step3';
import useFormSteps from '../hooks/useFormSteps';
import '../styles/Form.scss';
import FormContainer from '../components/FormContainer';
import { FormContext } from '../App';

const ProfileInfoForm = ({ onNext }) => {
  const { step, nextStep } = useFormSteps(1, 3);
  const { formData, setFormData } = useContext(FormContext);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [agreed, setAgreed] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [cityError, setCityError] = useState(null);
  const [socialNetworks, setSocialNetworks] = useState([]);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const sortedCountries = response.data
          .map((country) => ({
            value: country.cca2,
            label: country.name.common,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setCountries(sortedCountries);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const handleCountryChange = (selectedOption) => {
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
          if (response.data.data?.length > 0) {
            setCities(response.data.data.map((city) => ({ value: city, label: city })));
          } else {
            setCityError('No cities found for this country.');
          }
        })
        .catch(() => setCityError('Failed to load cities. Please try again later.'))
        .finally(() => setIsLoadingCities(false));
    }
  };

  const onSubmit = (data) => {
    const updatedFormData = {
      ...formData,
      ...data,
      country: selectedCountry?.label,
      city: selectedCity?.label,
    };
    setFormData(updatedFormData);

    if (step < 3) {
      nextStep();
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
          title="Profile Info"
          description="Fill in the data for profile. It will take a couple of minutes. You only need a passport."
        />
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <Step1
              register={register}
              setValue={setValue}
              countries={countries}
              cities={cities}
              agreed={agreed}
              setAgreed={setAgreed}
              selectedCountry={selectedCountry}
              selectedCity={selectedCity}
              isLoadingCities={isLoadingCities}
              cityError={cityError}
              handleCountryChange={handleCountryChange}
              handleCityChange={setSelectedCity}
            />
          )}
          {step === 2 && (
            <Step2
              register={register}
              errors={errors}
              socialNetworks={socialNetworks}
              setSocialNetworks={(networks) => {
                setSocialNetworks(networks);
                setFormData((prev) => ({ ...prev, socialNetworks: networks }));
              }}
              typedPhone={formData.phone}
              selectedCode={formData.selectedCode}
              email={formData.email}
            />
          )}
          {step === 3 && (
            <Step3
              countries={countries}
              cities={cities}
              selectedCountry={selectedCountry}
              selectedCity={selectedCity}
              isLoadingCities={isLoadingCities}
              cityError={cityError}
              handleCountryChange={handleCountryChange}
              handleCityChange={setSelectedCity}
            />
          )}
        </FormContainer>
      </div>
    </>
  );
};

export default ProfileInfoForm;
