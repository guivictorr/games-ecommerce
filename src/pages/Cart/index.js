import React, { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { FlatList } from 'react-native';

import { CartContainer, CartHeader } from './styles';

import CartItem from '../../components/CartItem';
import RoundedButton from '../../components/RoundedButton';

const Cart = ({ navigation }) => {
  const { products } = useContext(ProductsContext);

  return (
    <CartContainer>
      <CartHeader>
        <RoundedButton text="Voltar" action={() => navigation.goBack()} />
      </CartHeader>
      <FlatList
        data={products}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <CartItem title={item.name} />}
        style={{ width: '100%', marginTop: 20 }}
      />
    </CartContainer>
  );
};

export default Cart;
