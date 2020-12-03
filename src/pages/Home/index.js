import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import {
  HomeContainer,
  Header,
  FilterButton,
  CartButton,
  Notification,
  NotificationNumber,
} from './styles';

import ShopItem from '../../components/ShopItem';

import CartImage from '../../../assets/images/cart-icon.svg';
import FilterImage from '../../../assets/images/arrow-down-icon.svg';

import data from '../../data/products.json';

const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <FilterButton>
          <FilterImage height={22} width={22} />
        </FilterButton>
        <CartButton>
          <Notification>
            <NotificationNumber>3</NotificationNumber>
          </Notification>
          <CartImage height={32} width={32} />
        </CartButton>
      </Header>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ShopItem title={item.name} price={item.price.toFixed(2)} />
        )}
        keyExtractor={item => item.id}
        style={{ width: '90%', marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </HomeContainer>
  );
};

export default Home;
