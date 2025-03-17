import { useContext, useState } from 'react';
import SubmitButton from '../SubmitButton';
import CountryCitySelect from './CountryCitySelect';
import SaveIcon from '../../assets/icons/check.png';
import { FormContext } from '../../App';

interface Step3Props {
  countries: { value: string; label: string }[];
  cities: { value: string; label: string }[];
  selectedCountry: { value: string; label: string } | null;
  selectedCity: { value: string; label: string } | null;
  isLoadingCities: boolean;
  cityError: string | null;
  handleCountryChange: (selectedOption: any) => void;
  handleCityChange: (selectedOption: any) => void;
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
}) => {
  const { formData, setFormData } = useContext(FormContext);
  const [address, setAddress] = useState(formData.address || '');
  const [zipCode, setZipCode] = useState(formData.zipCode || '');
  const [optional, setOptional] = useState(formData.optional || '');

  const handleSave = () => {
    const updatedData = { ...formData, address, zipCode, optional };
    setFormData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
    console.log('Final Profile Data:', updatedData);
  };
  return (
    <>
      <div className="form-group">
        <div className="input-wrapper">
          <div className="data-title">
            <h3 className="heading-common">Delivery address</h3>
            <p className="text-common">Used for shipping orders</p>
          </div>

          <label className="name-label">Address</label>
          <div className="name-wrapper">
            <input
              type="text"
              placeholder="47 W 13th St"
              className="input-field"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
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
            <input
              type="text"
              placeholder="10010"
              className="input-field"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <label className="name-label">Optional</label>
          <div className="name-wrapper">
            <input
              type="text"
              placeholder="optioonal"
              className="input-field"
              value={optional}
              onChange={(e) => setOptional(e.target.value)}
            />
          </div>
        </div>

        <SubmitButton
          label="SAVE"
          onClick={handleSave}
          type="button"
          variable="prime"
          icon={<img src={SaveIcon} alt="Save Icon" className="icon-style" />}
        />
      </div>
    </>
  );
};

export default Step1;
