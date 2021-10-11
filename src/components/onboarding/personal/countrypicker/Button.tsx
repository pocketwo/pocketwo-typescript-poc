import React from 'react';
import {default as _Button} from '../../../shared/button';

interface Props {
  onPress: any;
}

const Button: React.FC<Props> = ({onPress}: Props) => {
  return <_Button text={'Confirm'} onPress={onPress} />;
};

export default Button;
