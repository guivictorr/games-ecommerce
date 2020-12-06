import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const CartContainer = styled.View`
  flex: 1;
  background-color: #f9fcff;
  align-items: center;
  margin-top: 35px;
`;

export const CartHeader = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  padding: 0 25px;
`;

export const BackButton = styled(RectButton)`
  background-color: #afe2ff;
  border-radius: 50px;
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
`;

export const BackButtonText = styled.Text``;
