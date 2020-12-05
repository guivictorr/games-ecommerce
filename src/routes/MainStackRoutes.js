import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Filters from '../pages/Filters';

const { Screen, Navigator } = createStackNavigator();

const MainStackRoutes = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="Filters" component={Filters} />
    </Navigator>
  );
};

export default MainStackRoutes;
