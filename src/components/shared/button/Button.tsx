import React from 'react';
import styled from 'styled-components/native';
import {colours} from '../../../constants';

interface Props {
  text: string;
  onPress: any;
}

const Button: React.FC<Props> = ({text, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  height: 50px;
  background-color: ${colours.blue};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Text = styled.Text`
  color: white;
`;

export default Button;
