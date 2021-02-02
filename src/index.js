import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';
import {
  useFonts,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import AppProvider from './context';
import Routes from './routes';

const Main = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  const theme = {
    colors: {
      background: '#0d0d0d',
      primary: '#ff6523',
      contrastText: '#e5e5e5',
      success: '#3affac',
      error: '#ff3a5e',
    },
    borderRadius: '6px',
    ubuntuBold: 'Ubuntu_700Bold',
    ubuntuMedium: 'Ubuntu_500Medium',
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default Main;
