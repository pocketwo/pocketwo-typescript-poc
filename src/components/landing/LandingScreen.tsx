import React from 'react';
import Logo from './Logo';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ScreenView} from './Style';

const LandingScreen: React.FC = () => {
  const navigation = useNavigation();

  const next = () => navigation.navigate('Login' as never);

  return (
    <TouchableOpacity onPress={next}>
      <ScreenView>
        <Logo />
      </ScreenView>
    </TouchableOpacity>
  );
};

export default LandingScreen;
