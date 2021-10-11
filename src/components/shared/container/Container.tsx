import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colours, sizes} from '../../../constants';

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  behavior: ${Platform.OS === 'ios' ? 'padding' : undefined};
  flex: 1;
  background-color: ${colours.white};
`;

const ScrollView = styled.ScrollView`
  padding-left: ${sizes.width / 10}px;
  padding-right: ${sizes.width / 10}px;
`;

const Container: React.FC = ({children}) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

export {Container};
