import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/core';
import {colours} from '../../../constants';

const Footer: React.FC = () => {
  const navigation = useNavigation();

  const goToSignUp = () => navigation.navigate('Register' as never);

  return (
    <View>
      <Text>Dont have an account? </Text>
      <Link onPress={goToSignUp}>Sign Up</Link>
    </View>
  );
};

const View = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const Text = styled.Text``;

const Link = styled.Text`
  color: ${colours.blue};
`;

export default Footer;
