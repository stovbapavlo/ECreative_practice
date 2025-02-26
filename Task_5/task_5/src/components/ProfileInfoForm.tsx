import { useForm } from 'react-hook-form';
import { useState } from 'react';
import DatePicker from './DatePicker'; // путь может отличаться, проверь его

import logo from '../assets/icons/Logo.png';
import '../styles/ProfileInfoForm.scss';

const countries = [
  { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago'] },
  { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal'] },
];

interface ProfileInfoFormProps {
  onNext: () => void;
}

const ProfileInfoForm: React.FC<ProfileInfoFormProps> = ({ onNext }) => {
  const { register, setValue, handleSubmit } = useForm();
  const [profileStep, setProfileStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedCity, setSelectedCity] = useState(selectedCountry.cities[0]);
  const [agreed, setAgreed] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setValue('dateOfBirth', date);
  };

  const onSubmit = (data: any) => {
    console.log('Profile Info:', {
      ...data,
      country: selectedCountry.name,
      city: selectedCity,
    });
    setProfileStep(2);
  };

  return (
    <>
      <div className="global-header">
        <div className="company-name">
          <img src={logo} alt="company-logo" className="company-logo" />
          COMPANY NAME
        </div>
        <button className="close-button">✖</button>
      </div>

      <div className="profile-form">
        <div className="progress-indicator">
          <span className={`circle ${profileStep >= 1 ? 'active' : ''}`}></span>
          <span className={`progress-line ${profileStep >= 2 ? 'active' : ''}`}></span>
          <span className={`circle ${profileStep >= 2 ? 'active' : ''}`}></span>
          <span className={`progress-line ${profileStep >= 3 ? 'active' : ''}`}></span>
          <span className={`circle ${profileStep >= 3 ? 'active' : ''}`}></span>
        </div>

        <h2 className="title">Profile Info</h2>
        <p className="description">
          Fill in the data for profile. It will take a couple of minutes. You only need a passport.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          {profileStep === 1 && (
            <>
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="checkbox"
                />
                <span>
                  I agree with <a href="#">Terms of use</a>
                </span>
              </div>
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
                <div>
                  <label className="name-label">Date of Birth</label>
                  <div className="name-wrapper">
                    <DatePicker onChange={handleDateChange} />
                  </div>
                </div>
                <label className="name-label">Country</label>
                <div className="name-wrapper">
                  <input
                    type="text"
                    placeholder="USA"
                    {...register('country')}
                    className="input-field"
                  />
                </div>
                <label className="name-label">City</label>
                <div className="name-wrapper">
                  <input
                    type="text"
                    placeholder="New York"
                    {...register('city')}
                    className="input-field"
                  />
                </div>
              </div>
              <div className="name-input">
                <div className="name-wrapper">
                  <input
                    type="text"
                    placeholder="111-111-111"
                    {...register('ITIN')}
                    className="input-field"
                  />
                  <p>Your ITIN</p>
                </div>
              </div>

              <button type="submit" className="submit-button" disabled={!agreed}>
                Go Next →
              </button>
            </>
          )}

          {profileStep === 2 && (
            <h1>
              <button type="submit" className="submit-button" disabled={!agreed}>
                Go Next →
              </button>
            </h1>
          )}
          {profileStep === 3 && (
            <h1>
              <button type="submit" className="submit-button" disabled={!agreed}>
                Go Next →
              </button>
            </h1>
          )}
        </form>
      </div>
    </>
  );
};

export default ProfileInfoForm;
