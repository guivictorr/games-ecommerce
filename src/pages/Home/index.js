import React, { useCallback, useContext } from 'react';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ProductsContext } from '../../context/productsContext';
import { CartContext } from '../../context/cartContext';

import { HomeContainer } from './styles';

import ShopItem from '../../components/ShopItem';
import CircleButton from '../../components/CircleButton';
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
        <CircleButton onPress={handleFiltersPageNavigation}>
          <AntDesign name="filter" size={32} color="white" />
        </CircleButton>
        <CircleButton
          hasNotification
          notificationElement={cartData.length}
          onPress={handleCartPageNavigation}
        >
          <AntDesign name="shoppingcart" size={32} color="white" />
        </CircleButton>
      </Header>
      <FlatList
        data={products}
        extraData={sortedProducts}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item }) => (
          <ShopItem
            title={item.name}
            price={item.price.toFixed(2)}
            id={item.id}
          />
        )}
      />
    </HomeContainer>
  );
};

export default Home;
