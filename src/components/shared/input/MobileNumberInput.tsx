import React, {useState, useRef} from 'react';
import {StyleSheet} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const MobileNumberInput = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
  return (
    <PhoneInput
      ref={phoneInput}
      defaultValue={phoneNumber}
      defaultCode="SG"
      layout="first"
      withShadow
      autoFocus
      containerStyle={styles.phoneContainer}
      textContainerStyle={styles.textInput}
      onChangeFormattedText={text => {
        setphoneNumber(text);
      }}
    />
  );
};

const styles = StyleSheet.create({
  phoneContainer: {
    width: '100%',
    height: 50,
  },
  textInput: {
    paddingVertical: 0,
  },
});

export default MobileNumberInput;
