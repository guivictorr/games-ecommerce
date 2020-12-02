import styled from 'styled-components/native';

export const ShopItemContainer = styled.View`
  padding: 12px;
  border: 2px #afe2ff solid;
  border-radius: 12px;
  width: 50%;
  align-items: center;
  margin: 10px;
`;

export const ShopItemImage = styled.Image``;

export const ShopItemName = styled.Text`
  font-size: 18px;
  margin-top: 20px;
  color: #2a3239;
`;

export const ShopItemPrice = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #afe2ff;
`;

export const ShopItemButton = styled.TouchableOpacity`
  background-color: #afe2ff;
  border-radius: 50px;
  padding: 8px 12px;
  margin-top: 20px;
  align-items: center;
`;

export const ShopItemButtonText = styled.Text`
  font-size: 16px;
  color: #2a3239;
`;
