import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Filters from '../pages/Filters';
import Cart from '../pages/Cart';

const { Screen, Navigator } = createStackNavigator();

const MainStackRoutes = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="Filters" component={Filters} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
};

export default MainStackRoutes;
