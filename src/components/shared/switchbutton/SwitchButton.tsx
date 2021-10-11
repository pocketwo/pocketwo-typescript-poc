import React from 'react';
import styled from 'styled-components/native';
import SingleButton from './SingleButton';

type SwitchOptions = '' | 'true' | 'false';

interface Props {
  clicked: SwitchOptions;
  setClicked: React.Dispatch<React.SetStateAction<SwitchOptions>>;
}

const SwitchButton: React.FC<Props> = ({clicked, setClicked}: Props) => {
  return (
    <Container>
      <SingleButton
        clicked={clicked === 'true'}
        side="left"
        text={'Yes'}
        onPress={() => setClicked('true')}
      />
      <SingleButton
        clicked={clicked === 'false'}
        side="right"
        text={'No'}
        onPress={() => setClicked('false')}
      />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
  flex-direction: row;
  flex: 1;
`;

export default SwitchButton;
