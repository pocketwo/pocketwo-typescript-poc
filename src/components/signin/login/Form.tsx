import React from 'react';
import styled from 'styled-components/native';
import Button from '../../shared/button';
import TextInput from '../../shared/input/TextInput';
import {FormView} from '../Styles';

const Form = () => {
  return (
    <FormView>
      <Text>Login to your Account</Text>
      <TextInput placeholder={'email'} />
      <TextInput placeholder={'password'} />
      <Button text={'Sign In'} onPress={console.log} />
    </FormView>
  );
};

const Text = styled.Text``;

export default Form;
