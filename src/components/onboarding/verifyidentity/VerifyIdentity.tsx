import React, {useState} from 'react';
import Container from '../../shared/container';
import {TextInput} from '../../shared/input';
import {FieldText} from './Styles';
import SwitchButton from '../../shared/switchbutton';
import AddressBox from './AddressBox';
import Button from '../../shared/button';

const VerifyIdentity = () => {
  const [isCurrentAddress, setIsCurrentAddress] = useState(
    '' as '' | 'true' | 'false',
  );

  return (
    <Container>
      <FieldText>Personal Identity Number</FieldText>
      <TextInput placeholder={'Personal Identity Number'} />
      <FieldText>NRIC Front</FieldText>
      <TextInput placeholder={'Upload NRIC Front'} />
      <FieldText>NRIC Back</FieldText>
      <TextInput placeholder={'Upload NRIC Back'} />
      <FieldText>Is your NRIC address your current address?</FieldText>
      <SwitchButton
        clicked={isCurrentAddress}
        setClicked={setIsCurrentAddress}
      />

      <FieldText>NRIC Back</FieldText>
      <TextInput placeholder={'Upload NRIC Back'} />
      {isCurrentAddress === 'false' && (
        <>
          <FieldText>Proof of Address</FieldText>
          <AddressBox />
        </>
      )}
      <Button text="Continue" onPress={() => {}} />
    </Container>
  );
};

export default VerifyIdentity;
