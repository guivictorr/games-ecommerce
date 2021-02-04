import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

const RoundedButtonContainer = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  width: 100%;
`;

RoundedButtonContainer.Title = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.contrastText};
  font-family: ${({ theme }) => theme.ubuntuMedium};
`;

export default RoundedButtonContainer;
