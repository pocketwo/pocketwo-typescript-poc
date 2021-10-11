import React from 'react';
import styled from 'styled-components/native';
import {images} from '../../../constants';

const Logo: React.FC = () => {
  return (
    <View>
      <Image source={images.logo} resizeMode="contain" />
    </View>
  );
};

const View = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Image = styled.Image`
  width: 60%;
`;

export default Logo;
