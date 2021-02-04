import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const CartContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

CartContainer.Checkout = styled.View`
  height: 130px;
  padding: 30px 15px;
  background: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

CartContainer.Button = styled(RectButton)`
  width: 145px;
  height: 65px;
  padding: 20px 25px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-right: 5px;
  align-items: center;
`;

CartContainer.ButtonText = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.ubuntuBold};
  color: ${({ theme }) => theme.colors.contrastText};
`;

CartContainer.PricesBox = styled.View``;

CartContainer.Price = styled.Text`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.ubuntuBold};
  align-self: flex-end;
`;

export default CartContainer;
