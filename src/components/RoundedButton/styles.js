import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const RoundedButtonContainer = styled(RectButton)`
  background-color: #afe2ff;
  border-radius: 50px;
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
`;

export const RoundedButtonText = styled.Text`
  font-size: 16px;
  color: #2a3239;
`;
