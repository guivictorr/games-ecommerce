import React from 'react';

import images from '../../utils/images';

import {
  ShopItemContainer,
  ShopItemImage,
  ShopItemName,
  ShopItemPrice,
  ShopItemContent,
} from './styles';

import RoundedButton from '../RoundedButton';

const ShopItem = ({ title, price }) => {
  return (
    <ShopItemContainer>
      <ShopItemContent>
        <ShopItemName>{title}</ShopItemName>
        <ShopItemPrice>R${price}</ShopItemPrice>
        <RoundedButton text="Adicionar ao carrinho" />
      </ShopItemContent>
      <ShopItemImage source={images[title]} />
    </ShopItemContainer>
  );
};

export default ShopItem;
