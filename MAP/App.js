// src/escreens/app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import loginscreen from './src/escreens/loginscreen';
import homescreen from './src/escreens/homescreen';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loginscreen" component={loginscreen} />
        <Stack.Screen name="homescreen" component={homescreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
