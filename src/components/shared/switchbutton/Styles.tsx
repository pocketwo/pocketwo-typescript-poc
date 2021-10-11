import styled, {css} from 'styled-components/native';

import {colours} from '../../../constants';

const buttonStyle = css`
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: ${colours.grey};
`;

const ButtonText = styled.Text``;

const ButtonView = styled.TouchableOpacity`
  ${buttonStyle}
`;

export {ButtonText, ButtonView};
