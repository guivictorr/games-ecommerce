import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { CartContext } from '../../context/cartContext';

import CartItem from '../../components/CartItem';
import Header from '../../components/Header';
import CircleButton from '../../components/CircleButton';
import HeaderContainer from '../../components/Header/styles';

import CartContainer from './styles';

const Cart = ({ navigation }) => {
  const { cartData, cartValues } = useContext(CartContext);

  return (
    <CartContainer>
      <Header>
        <CircleButton onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={32} color="#e5e5e5" />
        </CircleButton>
        <HeaderContainer.Title>Carrinho</HeaderContainer.Title>
      </Header>
      <FlatList
        data={cartData}
        extraData={cartData}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CartItem
            title={item.name}
            amount={item.amount}
            id={item.id}
            price={item.price}
          />
        )}
        style={{ width: '100%' }}
      />
      <CartContainer.Checkout>
        <CartContainer.Button onPress={() => navigation.goBack()}>
          <CartContainer.ButtonText>Finalizar</CartContainer.ButtonText>
        </CartContainer.Button>
        <CartContainer.PricesBox>
          <CartContainer.Price fontSize={26}>
            Total: R${cartValues.cartTotalValue}
          </CartContainer.Price>
          <CartContainer.Price fontSize={18}>
            Subtotal: R${cartValues.cartSubTotal}
          </CartContainer.Price>
          <CartContainer.Price fontSize={16}>
            Frete: R${cartValues.cartShipValue}
          </CartContainer.Price>
        </CartContainer.PricesBox>
      </CartContainer.Checkout>
    </CartContainer>
  );
};

export default Cart;
