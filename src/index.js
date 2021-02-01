import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppProvider from './context';
import Routes from './routes';

const theme = {
  colors: {
    background: '#0d0d0d',
    primary: '#ff6523',
    contrastText: '#e5e5e5',
    success: '#3affac',
    error: '#ff3a5e',
  },
  borderRadius: '6px',
};

const Main = () => (
  <AppProvider>
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  </AppProvider>
);

export default Main;
