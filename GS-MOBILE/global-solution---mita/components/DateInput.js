import { useState } from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-datepicker';

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View>
      <DatePicker
        style={{ width: 200 }}
        date={selectedDate}
        mode="date"
        placeholder="Selecionar data"
        format="DD-MM-YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            display: 'none'
          },
          dateInput: {
            height: '70%'
          },
        }}
        onDateChange={handleDateChange}
      />
    </View>
  );
};

export default DateInput;
