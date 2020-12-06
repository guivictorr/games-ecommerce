import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import {
  CartContainer,
  CartHeader,
  BackButton,
  BackButtonText,
} from './styles';

import CartItem from '../../components/CartItem';
import { ProductsContext } from '../../context/productsContext';

const Cart = ({ navigation }) => {
  const { products } = useContext(ProductsContext);

  return (
    <CartContainer>
      <CartHeader>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonText>Voltar</BackButtonText>
        </BackButton>
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
