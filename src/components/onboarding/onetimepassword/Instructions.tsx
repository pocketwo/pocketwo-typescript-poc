import React from 'react';
import styled from 'styled-components/native';

interface Props {
  phonenumber: string;
}

const Instructions: React.FC<Props> = ({phonenumber}: Props) => {
  return (
    <InstructionsView>
      <Text>
        A one-time password has been sent to your phone number {phonenumber}
      </Text>
    </InstructionsView>
  );
};

const InstructionsView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-width: 1px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Text = styled.Text``;

export default Instructions;
