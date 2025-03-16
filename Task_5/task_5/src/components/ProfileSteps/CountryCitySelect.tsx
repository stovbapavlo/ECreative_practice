import React from 'react';
import Select from 'react-select';

interface CountryCitySelectProps {
  countries: { value: string; label: string }[];
  cities: { value: string; label: string }[];
  selectedCountry: { value: string; label: string } | null;
  selectedCity: { value: string; label: string } | null;
  isLoadingCities: boolean;
  cityError: string | null;
  handleCountryChange: (selectedOption: any) => void;
  handleCityChange: (selectedOption: any) => void;
}

const CountryCitySelect: React.FC<CountryCitySelectProps> = ({
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
    <>
      <label className="name-label">Country</label>
      <div className="name-wrapper">
        <Select
          options={countries}
          value={selectedCountry}
          className="input-field"
          onChange={handleCountryChange}
          placeholder="Select a country"
        />
      </div>

      <label className="name-label">City</label>
      <div className="name-wrapper">
        <Select
          options={cities}
          value={selectedCity}
          onChange={handleCityChange}
          isDisabled={!selectedCountry || isLoadingCities}
          isLoading={isLoadingCities}
          className="input-field"
          placeholder={
            isLoadingCities
              ? 'Loading cities...'
              : selectedCountry
              ? 'Select a city'
              : 'Please select a country first'
          }
          noOptionsMessage={() =>
            cityError || (selectedCountry ? 'No cities found' : 'Please select a country first')
          }
        />
      </div>
      {cityError && <p className="error-message">{cityError}</p>}
    </>
  );
};

export default CountryCitySelect;
