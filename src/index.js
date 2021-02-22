import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';

import AppProvider from './context';
import Routes from './routes';
import theme from './theme';

const Main = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <StatusBar backgroundColor={theme.colors.background} />
          <Routes />
        </ThemeProvider>
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default Main;
