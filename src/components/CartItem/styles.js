import styled from 'styled-components/native';

export const CartItemContainer = styled.View`
  width: 100%;
  height: 100px;
  padding: 12px;
  align-self: center;
  flex-direction: row;
  align-items: center;
`;

export const CartItemImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const CartItemName = styled.Text`
  font-size: 18px;
  color: #2a3239;
  max-width: 150px;
  margin-left: 20px;
`;
