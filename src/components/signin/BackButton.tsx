import React from 'react';
import {BackButton as _BackButton} from '../shared/navigation';
import {BackButtonView} from './Styles';

const BackButton = () => {
  return (
    <BackButtonView>
      <_BackButton />
    </BackButtonView>
  );
};

export default BackButton;
