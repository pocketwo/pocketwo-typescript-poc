import React from 'react';
import {default as _Logo} from '../shared/logo';
import {LogoView} from './Style';

const Logo: React.FC = () => {
  return (
    <LogoView>
      <_Logo />
    </LogoView>
  );
};

export default Logo;
