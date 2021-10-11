import React from 'react';
import styled from 'styled-components/native';
import {colours} from '../../../constants';

interface Props {
  text: string;
  linkText: string;
  onPress: any;
}

const TextWithLink: React.FC<Props> = ({text, linkText, onPress}: Props) => {
  return (
    <View>
      <Text>{text}</Text>
      <Link onPress={onPress}>{linkText}</Link>
    </View>
  );
};

const View = styled.View`
  flex-direction: row;
`;

const Text = styled.Text``;

const Link = styled.Text`
  color: ${colours.blue};
`;

export default TextWithLink;
