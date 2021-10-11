import React from 'react';
import {TitleText, TitleView} from './Styles';

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({text}: Props) => {
  return (
    <TitleView>
      <TitleText>{text}</TitleText>
    </TitleView>
  );
};

export default Title;
