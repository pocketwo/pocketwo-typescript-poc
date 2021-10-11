import React, {useState} from 'react';
import {default as _DatePicker} from 'react-native-date-picker';
import TextInput from '../input/TextInput';
import dayjs from 'dayjs';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DatePicker: React.FC = () => {
  const [picked, setPicked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const getDateString = (): string => {
    if (!picked) {
      return '';
    }

    return dayjs(date).format('DD MMM YYYY');
  };

  const onDateChange = (e: React.SetStateAction<Date>): void => {
    setPicked(true);
    setDate(e);
  };

  return (
    <TouchableOpacity onPress={() => setOpen(true)}>
      <TextInput
        value={getDateString()}
        disabled={true}
        placeholder={'Date of Birth'}
      />
      <_DatePicker
        onDateChange={onDateChange}
        mode={'date'}
        modal={true}
        open={open}
        date={date}
        onConfirm={value => {
          setOpen(false);
          setDate(value);
          setPicked(true);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </TouchableOpacity>
  );
};

export default DatePicker;
