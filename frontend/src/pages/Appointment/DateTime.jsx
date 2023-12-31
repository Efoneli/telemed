import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='my-4 border border-solid p-2 py-2'>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
      />
    </div>
  );
};

export default DateTimePicker;
