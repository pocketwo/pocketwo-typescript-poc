import React from 'react';
import TextInput from './TextInput';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  children?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value?: string;
  placeholder?: string;
}

const TouchableInput: React.FC<Props> = ({
  children,
  setOpen,
  value,
  placeholder,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => setOpen(true)}>
      <TextInput value={value} disabled={true} placeholder={placeholder} />
      {children && children}
    </TouchableOpacity>
  );
};

export default TouchableInput;
