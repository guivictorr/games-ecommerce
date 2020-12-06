import React, { useCallback, useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { CartContext } from '../../context/cartContext';
import { FlatList } from 'react-native';

import {
  HomeContainer,
  CartButton,
  Notification,
  NotificationNumber,
} from './styles';

import ShopItem from '../../components/ShopItem';

import CartImage from '../../../assets/images/cart-icon.svg';
import RoundedButton from '../../components/RoundedButton';
import Header from '../../components/Header';

const Home = ({ navigation }) => {
  const { cartData } = useContext(CartContext);
  const { products, sortedProducts, setSortedProducts } = useContext(
    ProductsContext,
  );

  const handleFiltersPageNavigation = useCallback(() => {
    navigation.navigate('Filters');
    setSortedProducts([]);
  }, [navigation]);

  const handleCartPageNavigation = useCallback(() => {
    navigation.navigate('Cart');
    setSortedProducts([]);
  }, [navigation]);

  return (
    <HomeContainer>
      <Header>
        <RoundedButton text="Filtros" action={handleFiltersPageNavigation} />
        <CartButton onPress={handleCartPageNavigation}>
          <Notification>
            <NotificationNumber>{cartData.length}</NotificationNumber>
          </Notification>
          <CartImage height={32} width={32} />
        </CartButton>
      </Header>
      <FlatList
        data={products}
        extraData={sortedProducts}
        renderItem={({ item }) => (
          <ShopItem
            title={item.name}
            price={item.price.toFixed(2)}
            id={item.id}
          />
        )}
        keyExtractor={item => item.name}
        style={{ width: '90%' }}
        showsVerticalScrollIndicator={false}
      />
    </HomeContainer>
  );
};

export default Home;
