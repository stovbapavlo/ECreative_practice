import { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

interface DatePickerProps {
  onChange: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const fp = flatpickr(inputRef.current, {
      dateFormat: 'd.m.Y',
      onChange: (selectedDates) => {
        if (selectedDates[0]) {
          const date = selectedDates[0];
          const formattedDate = `${String(date.getDate()).padStart(2, '0')}.${String(
            date.getMonth() + 1,
          ).padStart(2, '0')}.${String(date.getFullYear()).slice(-2)}`;
          onChange(formattedDate); // Передаём уже отформатированную строку
        }
      },
      disableMobile: true,
    });

    return () => fp.destroy();
  }, [onChange]);

  return <input ref={inputRef} className="input-field" placeholder="Select date" />;
};

export default DatePicker;
