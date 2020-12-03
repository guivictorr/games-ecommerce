import styled from 'styled-components/native';

export const ShopItemContainer = styled.View`
  width: 100%;
  height: 200px;
  padding: 12px;
  border: 2px #afe2ff solid;
  border-radius: 12px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ShopItemImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ShopItemName = styled.Text`
  font-size: 18px;
  margin-top: 20px;
  color: #2a3239;
  max-width: 150px;
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
  color: #2a3239;
`;

export const ShopItemContent = styled.View``;
