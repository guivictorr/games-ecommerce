import React, { useContext, useState } from 'react';
import { FlatList, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ProductsContext } from '../../context/productsContext';
import { CartContext } from '../../context/cartContext';

import { HomeContainer } from './styles';

import ShopItem from '../../components/ShopItem';
import CircleButton from '../../components/CircleButton';
import Header from '../../components/Header';
import Filters from '../../components/Filters';

const Home = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartLength } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const handleFiltersPageNavigation = () => {
    setIsOpen(!isOpen);
  };

  const handleCartPageNavigation = () => {
    navigation.navigate('Cart');
  };

  return (
    <HomeContainer>
      <Header>
        <CircleButton onPress={handleFiltersPageNavigation}>
          <AntDesign name="filter" size={32} color="white" />
        </CircleButton>
        <CircleButton
          hasNotification
          notificationElement={cartLength}
          onPress={handleCartPageNavigation}
        >
          <AntDesign name="shoppingcart" size={32} color="white" />
        </CircleButton>
      </Header>
      <FlatList
        data={products}
        extraData={products}
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

      <Modal
        visible={isOpen}
        animationType="slide"
        statusBarTranslucent
        transparent
      >
        <Filters closeModal={() => setIsOpen(false)} />
      </Modal>
    </HomeContainer>
  );
};

export default Home;
