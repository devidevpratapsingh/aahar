import React from 'react';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

import BottomTabNavigator from './BottomTabNavigator';

const Stack =
  createNativeStackNavigator();

const AppNavigator = () => {

  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
      />

      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
      />

      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
      />

    </Stack.Navigator>
  );
};

export default AppNavigator;