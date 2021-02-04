import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import images from '../../utils/images';

import CartItemContainer from './styles';

const CartItem = ({ title, amount, id, price }) => {
  const { handleRemoveCartProducts } = useContext(CartContext);

  return (
    <CartItemContainer>
      <CartItemContainer.Image source={images[title]} resizeMode="contain" />
      <CartItemContainer.Content>
        <CartItemContainer.Name numberOfLines={1} ellipsizeMode="tail">
          {title}
        </CartItemContainer.Name>
        <CartItemContainer.Text>R${price.toFixed(2)}</CartItemContainer.Text>
        <CartItemContainer.Amount>{amount}x</CartItemContainer.Amount>
        <CartItemContainer.Button onPress={() => handleRemoveCartProducts(id)}>
          <CartItemContainer.ButtonText>Remover</CartItemContainer.ButtonText>
        </CartItemContainer.Button>
      </CartItemContainer.Content>
    </CartItemContainer>
  );
};

export default CartItem;
