import React, {useState} from 'react';
import countries from '../../../../utils/countries';
import {Picker} from '@react-native-picker/picker';
import ModalContainer from './Modal';
import Title from './Title';
import Button from './Button';
import TouchableInput from '../../../shared/input/TouchableInput';

const DEFAULT_COUNTRY = 'Singapore';

interface Props {
  title?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const CountryPicker: React.FC<Props> = ({title, value, setValue}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableInput
        open={modalVisible}
        setOpen={setModalVisible}
        placeholder={title}
        value={value}
      />
      <ModalContainer
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        {title && <Title text={title} />}
        <Picker
          mode={'dropdown'}
          selectedValue={value}
          onValueChange={(itemValue, _) => setValue(itemValue)}>
          {countries.asList().map((countryInfo, idx) => (
            <Picker.Item
              key={idx}
              label={`${countryInfo.emoji} ${countryInfo.name}`}
              value={countryInfo.name}
            />
          ))}
        </Picker>
        <Button
          onPress={() => {
            if (!value) {
              setValue(DEFAULT_COUNTRY);
            }
            setModalVisible(false);
          }}
        />
      </ModalContainer>
    </>
  );
};

export default CountryPicker;
