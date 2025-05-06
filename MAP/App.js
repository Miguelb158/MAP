// src/escreens/app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './loginscreen';
import HomeScreen from './homescreen';
import ProfileScreen from './profilescreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
