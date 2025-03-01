import React from 'react';
import SubmitButton from '../../components/SubmitButton';
import DatePicker from '../../components/DatePicker';
import CountryCitySelect from './CountryCitySelect';

interface Step3Props {
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

const Step1: React.FC<Step3Props> = ({
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
      <div className="name-input">
        <div className="data-title">
          <h3>Personal data</h3>
          <p>Specify exactly as in your passport</p>
        </div>

        <label className="name-label">Adress</label>
        <div className="name-wrapper">
          <input type="text" placeholder="47 W 13th St" className="input-field" />
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
        <label className="name-label">Zip code</label>
        <div className="name-wrapper">
          <input type="text" placeholder="10010" className="input-field" />
        </div>
        <label className="name-label">Optional</label>
        <div className="name-wrapper">
          <input type="text" placeholder="optioonal" className="input-field" />
        </div>
      </div>

      <SubmitButton label="Go Next →" />
    </>
  );
};

export default Step1;
