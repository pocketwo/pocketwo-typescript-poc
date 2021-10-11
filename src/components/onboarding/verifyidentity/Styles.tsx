import styled from 'styled-components/native';
import {colours} from '../../../constants';

const FieldText = styled.Text`
  margin-top: 10px;
`;

const AddressBoxView = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  height: 80px;
  color: ${colours.black};
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${colours.grey};
  align-items: center;
  justify-content: center;
`;

const AddressBoxTest = styled.Text`
  color: grey;
`;

export {FieldText, AddressBoxView, AddressBoxTest};
