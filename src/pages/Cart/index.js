import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { CartContext } from '../../context/cartContext';

import CartContainer from './styles';

import CartItem from '../../components/CartItem';
import Header from '../../components/Header';
import CircleButton from '../../components/CircleButton';
import RoundedButton from '../../components/RoundedButton';
import FiltersContainer from '../Filters/styles';
import HeaderContainer from '../../components/Header/styles';

const Cart = ({ navigation }) => {
  const {
    cartData,
    cartExtraData,
    cartSubTotal,
    cartShipValue,
    cartTotalValue,
  } = useContext(CartContext);

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
        extraData={cartExtraData}
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
    </CartContainer>
  );
};

export default Cart;
