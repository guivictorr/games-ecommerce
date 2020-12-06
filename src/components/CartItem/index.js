import React from 'react';

import images from '../../utils/images';

import { CartItemContainer, CartItemName, CartItemImage } from './styles';

const CartItem = ({ title }) => {
  return (
    <CartItemContainer>
      <CartItemImage source={images[title]} resizeMode="contain" />
      <CartItemName>{title}</CartItemName>
    </CartItemContainer>
  );
};

export default CartItem;
