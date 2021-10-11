import React from 'react';
import styled from 'styled-components/native';
import {colours} from '../../../constants';

interface Props {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
}

const TextInput: React.FC<Props> = ({placeholder, value, disabled}: Props) => {
  let editable = true;
  let selectTextOnFocus = true;

  if (disabled) {
    editable = false;
    selectTextOnFocus = false;
  }

  return (
    <TextInputBox
      placeholder={placeholder}
      value={value}
      editable={editable}
      selectTextOnFocus={selectTextOnFocus}
    />
  );
};

const TextInputBox = styled.TextInput`
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  height: 50px;
  color: ${colours.black};
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${colours.grey};
`;

export default TextInput;
