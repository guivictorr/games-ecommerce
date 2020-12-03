import React from 'react';

import images from '../../utils/images';

import {
  ShopItemContainer,
  ShopItemImage,
  ShopItemName,
  ShopItemPrice,
  ShopItemButton,
  ShopItemButtonText,
  ShopItemContent,
} from './styles';

const ShopItem = ({ title, price }) => {
  return (
    <ShopItemContainer>
      <ShopItemContent>
        <ShopItemName>{title}</ShopItemName>
        <ShopItemPrice>R${price}</ShopItemPrice>
        <ShopItemButton>
          <ShopItemButtonText>Adicionar ao carrinho</ShopItemButtonText>
        </ShopItemButton>
      </ShopItemContent>
      <ShopItemImage source={images[title]} />
    </ShopItemContainer>
  );
};

export default ShopItem;
