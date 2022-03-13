import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './global/styles/theme';

import { Home } from './pages/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor='transparent'
      />
      <Home />
    </ThemeProvider>

  )
}