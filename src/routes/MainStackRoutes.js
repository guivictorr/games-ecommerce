import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const { Screen, Navigator } = createStackNavigator();

const MainStackRoutes = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default MainStackRoutes;
