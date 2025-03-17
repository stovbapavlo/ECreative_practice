import { useEffect, useState, useContext } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import DatePicker from '../../components/DatePicker';
import CountryCitySelect from './CountryCitySelect';
import { FormContext } from '../../App';

interface PersonalDataFormProps {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
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
  const [dateOfBirth, setDateOfBirth] = useState(formData.dateOfBirth || '');

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setDateOfBirth(parsedData.dateOfBirth || '');
    }
  }, []);

  const handleDateChange = (date: string) => {
    setDateOfBirth(date);
    const updatedData = { ...formData, dateOfBirth: date };
    setFormData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
  };
  return (
    <>
      <div className="input-wrapper">
        <div className="data-title">
          <h3 className='heading-common'>Personal data</h3>
          <p className='text-common'>Specify exactly as in your passport</p>
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
          <DatePicker onChange={handleDateChange} value={dateOfBirth} />
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
      </div>
      <div className="input-wrapper">
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
    </>
  );
};

export default PersonalDataForm;
