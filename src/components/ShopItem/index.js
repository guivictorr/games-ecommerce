import React from 'react';

import {
  ShopItemContainer,
  ShopItemImage,
  ShopItemName,
  ShopItemPrice,
  ShopItemButton,
  ShopItemButtonText,
} from './styles';

import productItem from '../../../assets/images/the-witcher-iii-wild-hunt.png';

export default function Home() {
  return (
    <ShopItemContainer>
      <ShopItemImage source={productItem} />
      <ShopItemName>The Witcher 3</ShopItemName>
      <ShopItemPrice>R$200,00</ShopItemPrice>
      <ShopItemButton>
        <ShopItemButtonText>Adicionar ao carrinho</ShopItemButtonText>
      </ShopItemButton>
    </ShopItemContainer>
  );
}
