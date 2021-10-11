import React from 'react';
import styled from 'styled-components/native';
import SwitchButton from '../../shared/switchbutton';

interface Props {
  isPermanentResident: '' | 'true' | 'false';
  setIsPermanentResident: React.Dispatch<
    React.SetStateAction<'' | 'true' | 'false'>
  >;
}

const PermanentResidentQuestion: React.FC<Props> = ({
  isPermanentResident,
  setIsPermanentResident,
}: Props) => {
  return (
    <QuestionView>
      <FieldText>Are you a Singapore permanent resident?</FieldText>
      <SwitchButton
        clicked={isPermanentResident}
        setClicked={setIsPermanentResident}
      />
    </QuestionView>
  );
};

const QuestionView = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
`;

const FieldText = styled.Text``;

export default PermanentResidentQuestion;
