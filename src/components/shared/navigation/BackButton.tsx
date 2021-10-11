import React from 'react';
import styled from 'styled-components/native';
import {icons} from '../../../constants';
import {useNavigation} from '@react-navigation/core';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.Image`
  width: 20px;
  height: 20px;
`;

const BackButton: React.FC = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <Container onPress={goBack}>
      <Logo source={icons.back} resizeMode="contain" />
    </Container>
  );
};

export default BackButton;
