import React from 'react';
import Container from '../../shared/container';
import {default as _OneTimePassword} from '../../shared/onetimepassword';
import {View} from './Styles';
import {TextWithLink} from '../../shared/text';
import Instructions from './Instructions';
import {useNavigation} from '@react-navigation/core';

const OneTimePassword = () => {
  const navigation = useNavigation();

  const onCodeFilled = (code: string): void => {
    console.log(code);

    navigation.navigate('VerifyIdentity' as never);
  };

  return (
    <Container>
      <View>
        <Instructions phonenumber={'+65 ****1234'} />
      </View>

      <View>
        <_OneTimePassword onCodeFilled={onCodeFilled} />
        <TextWithLink
          text={"Didn't received your OTP? "}
          linkText={'Resend now'}
          onPress={() => {}}
        />
      </View>
    </Container>
  );
};

export default OneTimePassword;
