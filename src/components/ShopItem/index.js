import React, { useContext } from 'react';

import { CartContext } from '../../context/cartContext';
import images from '../../utils/images';

import RoundedButton from '../RoundedButton';

import ShopItemContainer from './styles';

const ShopItem = ({ title, price, id }) => {
  const { handleAddProductsToCart } = useContext(CartContext);

  return (
    <ShopItemContainer>
      <ShopItemContainer.Image source={images[title]} />
      <ShopItemContainer.Name>{title}</ShopItemContainer.Name>
      <ShopItemContainer.Price>R${price}</ShopItemContainer.Price>
      <RoundedButton
        text="Adicionar ao carrinho"
        action={() => handleAddProductsToCart(id)}
      />
    </ShopItemContainer>
  );
};

export default ShopItem;
