import React from 'react';
import styled from 'styled-components/native';

interface Props {
  text: string;
}

const NoteText: React.FC<Props> = ({text}: Props) => {
  return <Text>{text}</Text>;
};

const Text = styled.Text``;

export default NoteText;
