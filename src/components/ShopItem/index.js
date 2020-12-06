import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import images from '../../utils/images';

import {
  ShopItemContainer,
  ShopItemImage,
  ShopItemName,
  ShopItemPrice,
  ShopItemContent,
} from './styles';

import RoundedButton from '../RoundedButton';

const ShopItem = ({ title, price, id }) => {
  const { handleAddProductsToCart } = useContext(CartContext);

  return (
    <ShopItemContainer>
      <ShopItemContent>
        <ShopItemName>{title}</ShopItemName>
        <ShopItemPrice>R${price}</ShopItemPrice>
        <RoundedButton
          text="Adicionar ao carrinho"
          action={() => handleAddProductsToCart(id)}
        />
      </ShopItemContent>
      <ShopItemImage source={images[title]} />
    </ShopItemContainer>
  );
};

export default ShopItem;
