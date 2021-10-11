import React from 'react';
import {TextInput} from '../../../shared/input';
import {View} from './Styles';

const Address = () => {
  return (
    <View>
      <TextInput placeholder={'Address Line 1'} />
      <TextInput placeholder={'Address Line 2'} />
      <TextInput placeholder={'City'} />
      <TextInput placeholder={'State'} />
      <TextInput placeholder={'Country'} />
    </View>
  );
};

export default Address;
