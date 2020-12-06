import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { FlatList } from 'react-native';

import {
  CartContainer,
  CartTotalValue,
  CartSubTotalValue,
  CartShipValue,
  CartFooter,
  CartCheckOutButton,
  CartCheckOutButtonText,
  CartFooterValues,
} from './styles';

import CartItem from '../../components/CartItem';
import RoundedButton from '../../components/RoundedButton';
import Header from '../../components/Header';

const Cart = ({ navigation }) => {
  const { cartData } = useContext(CartContext);

  return (
    <CartContainer>
      <Header>
        <RoundedButton text="Voltar" action={() => navigation.goBack()} />
      </Header>
      <FlatList
        data={cartData}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CartItem title={item.name} amount={item.amount} />
        )}
        style={{ width: '100%' }}
      />
      <CartFooter>
        <CartCheckOutButton>
          <CartCheckOutButtonText>Finalizar</CartCheckOutButtonText>
        </CartCheckOutButton>
        <CartFooterValues>
          <CartTotalValue>Total: R$200,00</CartTotalValue>
          <CartSubTotalValue>Subtotal: R$100,00</CartSubTotalValue>
          <CartShipValue>Frete: R$100,00</CartShipValue>
        </CartFooterValues>
      </CartFooter>
    </CartContainer>
  );
};

export default Cart;
