// src/escreens/app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/escreens/loginscreen';
import HomeScreen from './src/escreens/homescreen';
import ProfileScreen from './src/escreens/profilescreen';
import RouteScreen from './src/escreens/RouteScreen';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="RouteScreen" component={RouteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
