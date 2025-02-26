import { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

interface DatePickerProps {
  onChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const fp = flatpickr(inputRef.current, {
      dateFormat: 'd.m.Y',
      onChange: (selectedDates) => {
        if (selectedDates[0]) {
          onChange(selectedDates[0]);
        }
      },
      disableMobile: true,
    });

    return () => fp.destroy();
  }, [onChange]);

  return <input ref={inputRef} className="input-field" placeholder="Select date" />;
};

export default DatePicker;
