import React from 'react';
import {useNavigation} from '@react-navigation/core';
import styled from 'styled-components/native';
import Button from '../../shared/button';
import TextInput from '../../shared/input/TextInput';
import {FormView} from '../Styles';

const Form = () => {
  const navigation = useNavigation();

  const signUp = () => {
    navigation.navigate('Onboard' as never);
  };

  return (
    <FormView>
      <Text>Login to your Account</Text>
      <TextInput placeholder={'email'} />
      <TextInput placeholder={'password'} />
      <TextInput placeholder={'confirm password'} />
      <Button text={'Sign Up'} onPress={signUp} />
    </FormView>
  );
};

const Text = styled.Text``;

export default Form;
