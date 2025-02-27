import React from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import DatePicker from '../../components/DatePicker';
import CountryCitySelect from './CountryCitySelect';

interface PersonalDataFormProps {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  handleDateChange: (date: Date) => void;
  countries: { value: string; label: string }[];
  cities: { value: string; label: string }[];
  selectedCountry: { value: string; label: string } | null;
  selectedCity: { value: string; label: string } | null;
  isLoadingCities: boolean;
  cityError: string | null;
  handleCountryChange: (selectedOption: any) => void;
  handleCityChange: (selectedOption: any) => void;
}

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({
  register,
  setValue,
  handleDateChange,
  countries,
  cities,
  selectedCountry,
  selectedCity,
  isLoadingCities,
  cityError,
  handleCountryChange,
  handleCityChange,
}) => {
  return (
    <div className="name-input">
      <div className="data-title">
        <h3>Personal data</h3>
        <p>Specify exactly as in your passport</p>
      </div>

      <label className="name-label">First Name</label>
      <div className="name-wrapper">
        <input
          type="text"
          placeholder="Alexander"
          {...register('firstName')}
          className="input-field"
        />
      </div>

      <label className="name-label">Second Name</label>
      <div className="name-wrapper">
        <input
          type="text"
          placeholder="Smith"
          {...register('secondName')}
          className="input-field"
        />
      </div>

      <label className="name-label">Date of Birth</label>
      <div className="name-wrapper">
        <DatePicker onChange={handleDateChange} />
      </div>

      <CountryCitySelect
        countries={countries}
        cities={cities}
        selectedCountry={selectedCountry}
        selectedCity={selectedCity}
        isLoadingCities={isLoadingCities}
        cityError={cityError}
        handleCountryChange={handleCountryChange}
        handleCityChange={handleCityChange}
      />

      <label className="name-label">ITIN</label>
      <div className="name-wrapper">
        <input
          type="text"
          placeholder="111-111-111"
          {...register('ITIN')}
          className="input-field"
        />
      </div>
      <p className="itin-description">Your ITIN</p>
    </div>
  );
};

export default PersonalDataForm;
