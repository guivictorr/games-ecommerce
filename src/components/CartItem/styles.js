import { RectButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const CartItemContainer = styled(SafeAreaView)`
  width: 100%;
  height: 170px;
  padding: 15px 20px;
  align-self: center;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

CartItemContainer.Image = styled.Image`
  width: 107px;
  height: 139px;
`;

CartItemContainer.Name = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.contrastText};
  font-family: ${({ theme }) => theme.ubuntuMedium};
  width: 220px;
`;

CartItemContainer.Text = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.ubuntuBold};
`;

CartItemContainer.Amount = styled(CartItemContainer.Text)`
  align-self: flex-end;
`;

CartItemContainer.Content = styled.View`
  flex-direction: column;
`;

CartItemContainer.Button = styled(RectButton)`
  height: 25px;
  width: 90px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 6px 15px;
  align-items: center;
  justify-content: center;
`;

CartItemContainer.ButtonText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.contrastText};
  font-family: ${({ theme }) => theme.ubuntuMedium};
`;

export default CartItemContainer;
