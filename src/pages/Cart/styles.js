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

export const CartFooter = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  width: 100%;
`;

export const CartCheckOutButton = styled(RectButton)`
  height: 50px;
  width: 150px;
  background-color: #4bd865;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const CartCheckOutButtonText = styled.Text`
  color: #f5f5f5;
  font-weight: bold;
`;

export const CartFooterValues = styled.View`
  min-width: 100px;
  align-items: flex-end;
`;

export const CartTotalValue = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
export const CartSubTotalValue = styled.Text`
  font-size: 18px;
`;
export const CartShipValue = styled.Text`
  font-size: 14px;
`;
