import React, { useCallback, useContext } from 'react';
import { FlatList } from 'react-native';

import {
  HomeContainer,
  Header,
  FilterButton,
  CartButton,
  Notification,
  NotificationNumber,
  FilterButtonText,
} from './styles';

import ShopItem from '../../components/ShopItem';

import CartImage from '../../../assets/images/cart-icon.svg';
import { ProductsContext } from '../../context/productsContext';

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
        <FilterButton onPress={handleFiltersPageNavigation}>
          <FilterButtonText>Filtros</FilterButtonText>
        </FilterButton>
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
