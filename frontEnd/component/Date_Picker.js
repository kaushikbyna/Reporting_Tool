import 'date-fns';
import React, { useState } from 'react';

import 'date-fns';
import DatePicker from 'react-date-picker';
import "../style/Date_picker.css"

function Date_Picker(props) {

  const [value, onChange] = useState(new Date());


return (
  <DatePicker
  calendarAriaLabel="Toggle calendar"
  clearAriaLabel="Clear value"
  dayAriaLabel="Day"
  monthAriaLabel="Month"
  nativeInputAriaLabel="Date"
  name="endDate"
  onChange={onChange}
  value={value}
  yearAriaLabel="Year"
/>
)
}

export default Date_Picker;
