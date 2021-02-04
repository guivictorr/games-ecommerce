import styled from 'styled-components/native';

export const ShopItemContainer = styled.View`
  width: 190px;
  height: 280px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`;

ShopItemContainer.Image = styled.Image`
  width: 115px;
  height: 130px;
`;

ShopItemContainer.Name = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 12px;
  font-family: ${({ theme }) => theme.ubuntuMedium};
`;

ShopItemContainer.Price = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 24px;
  font-family: ${({ theme }) => theme.ubuntuBold};
`;

export default ShopItemContainer;
