import React from 'react';
import AppProvider from './context';
import Routes from './routes';

const Main = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default Main;
