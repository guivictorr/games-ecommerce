import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import images from '../../utils/images';

import {
  CartItemContainer,
  CartItemName,
  CartItemImage,
  CartItemAmount,
} from './styles';

import RoundedButton from '../../components/RoundedButton';

const CartItem = ({ title, amount, id }) => {
  const { handleRemoveCartProducts } = useContext(CartContext);

  return (
    <CartItemContainer>
      <CartItemImage source={images[title]} resizeMode="contain" />
      <CartItemAmount>{amount}x</CartItemAmount>
      <CartItemName>{title}</CartItemName>
      <RoundedButton
        text="Excluir"
        action={() => handleRemoveCartProducts(id)}
      />
    </CartItemContainer>
  );
};

export default CartItem;
