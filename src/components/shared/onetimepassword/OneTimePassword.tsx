import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet} from 'react-native';

interface Props {
  onCodeFilled: ((code: string) => void) | undefined;
}

const OneTimePassword: React.FC<Props> = ({onCodeFilled}: Props) => {
  return (
    <OTPInputView
      style={styles.container}
      pinCount={4}
      autoFocusOnLoad
      clearInputs
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
      onCodeFilled={onCodeFilled}
      keyboardType={'number-pad'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    // backgroundColor: 'red',
  },

  borderStyleBase: {},

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default OneTimePassword;
