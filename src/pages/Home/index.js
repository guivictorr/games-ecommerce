import React from 'react';
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

export default function Home() {
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
      <ShopItem />
    </HomeContainer>
  );
}
