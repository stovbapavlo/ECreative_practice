import React from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import CheckboxAgreement from './CheckboxAgreement';
import PersonalDataForm from './PersonalDataForm';
import SubmitButton from '../../components/SubmitButton';

interface Step1Props {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  agreed: boolean;
  setAgreed: (agreed: boolean) => void;
  countries: { value: string; label: string }[];
  cities: { value: string; label: string }[];
  selectedCountry: { value: string; label: string } | null;
  selectedCity: { value: string; label: string } | null;
  isLoadingCities: boolean;
  cityError: string | null;
  handleCountryChange: (selectedOption: any) => void;
  handleCityChange: (selectedOption: any) => void;
  handleDateChange: (date: Date) => void;
}

const Step1: React.FC<Step1Props> = ({
  register,
  setValue,
  agreed,
  setAgreed,
  countries,
  cities,
  selectedCountry,
  selectedCity,
  isLoadingCities,
  cityError,
  handleCountryChange,
  handleCityChange,
  handleDateChange,
}) => {
  return (
    <>
      <CheckboxAgreement agreed={agreed} setAgreed={setAgreed} />

      <PersonalDataForm
        register={register}
        setValue={setValue}
        handleDateChange={handleDateChange}
        countries={countries}
        cities={cities}
        selectedCountry={selectedCountry}
        selectedCity={selectedCity}
        isLoadingCities={isLoadingCities}
        cityError={cityError}
        handleCountryChange={handleCountryChange}
        handleCityChange={handleCityChange}
      />

      <SubmitButton label="Go Next →" disabled={!agreed} />
    </>
  );
};

export default Step1;
