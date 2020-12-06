import React from 'react';

import images from '../../utils/images';

import {
  CartItemContainer,
  CartItemName,
  CartItemImage,
  CartItemAmount,
} from './styles';

const CartItem = ({ title, amount }) => {
  return (
    <CartItemContainer>
      <CartItemImage source={images[title]} resizeMode="contain" />
      <CartItemAmount>{amount}x</CartItemAmount>
      <CartItemName>{title}</CartItemName>
    </CartItemContainer>
  );
};

export default CartItem;
