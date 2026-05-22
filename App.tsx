import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';

import { CartProvider } from './app/context/CartContext';
import AppNavigator from './app/navigation/AuthNavigator';

export default function App() {

  return (

    <CartProvider>

      <NavigationContainer>

        <AuthNavigator />
 {/* <AppNavigator /> */}
      </NavigationContainer>

    </CartProvider>

  );
}