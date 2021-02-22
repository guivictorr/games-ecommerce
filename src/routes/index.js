import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackRoutes from './MainStackRoutes';

const Routes = () => (
  <NavigationContainer>
    <MainStackRoutes />
  </NavigationContainer>
);

export default Routes;
