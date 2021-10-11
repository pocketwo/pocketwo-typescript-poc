import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import Container from '../../shared/container';
import {AddressView, MobileNumberView} from './Styles';
import NoteText from '../NoteText';
import DatePicker from '../../shared/datepicker';
import CountryPicker from './countrypicker';
import PermanentResidentQuestion from './PermanentResidentQuestion';
import {MobileNumberInput, TextInput} from '../../shared/input';
import Address from './address';
import Button from '../../shared/button';

const PersonalScreen: React.FC = () => {
  const navigation = useNavigation();

  const [country, setCountry] = useState('');
  const [isPermanentResident, setIsPermanentResident] = useState(
    '' as '' | 'true' | 'false',
  );

  const onContinue = () => {
    navigation.navigate('OneTimePassword' as never);
  };

  return (
    <Container>
      <TextInput placeholder={'Email Address'} />
      <TextInput placeholder={'First Name'} />
      <TextInput placeholder={'Last Name'} />
      <NoteText
        text={'* Please ensure name is the same as in NRIC or passport'}
      />
      <DatePicker />
      <CountryPicker
        title={'Select Your Citizenship'}
        value={country}
        setValue={setCountry}
      />
      {country !== '' && country !== 'Singapore' && (
        <PermanentResidentQuestion
          isPermanentResident={isPermanentResident}
          setIsPermanentResident={setIsPermanentResident}
        />
      )}
      <MobileNumberView>
        <MobileNumberInput />
      </MobileNumberView>

      <AddressView>
        <Address />
      </AddressView>

      <Button text={'Continue'} onPress={onContinue} />
    </Container>
  );
};

export default PersonalScreen;
