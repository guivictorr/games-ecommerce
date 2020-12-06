import React, { useCallback, useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { FlatList } from 'react-native';

import {
  HomeContainer,
  Header,
  CartButton,
  Notification,
  NotificationNumber,
} from './styles';

import ShopItem from '../../components/ShopItem';

import CartImage from '../../../assets/images/cart-icon.svg';
import RoundedButton from '../../components/RoundedButton';

const Home = ({ navigation }) => {
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
            <NotificationNumber>3</NotificationNumber>
          </Notification>
          <CartImage height={32} width={32} />
        </CartButton>
      </Header>
      <FlatList
        data={products}
        extraData={sortedProducts}
        renderItem={({ item }) => (
          <ShopItem title={item.name} price={item.price.toFixed(2)} />
        )}
        keyExtractor={item => item.name}
        style={{ width: '90%' }}
        showsVerticalScrollIndicator={false}
      />
    </HomeContainer>
  );
};

export default Home;
