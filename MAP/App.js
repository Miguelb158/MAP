import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import app from "./src/escreens/app";
import firebase from "./src/escreens/firebase";
import homescreen from "./src/escreens/homescreen";
import loginscreen from "./src/escreens/loginscreen";
import paginainicial from "./src/escreens/paginainicial";
import profilescreen from "./src/escreens/profilescreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="loginscreen">
       <Stack.Screen name="loginscreen" component={loginscreen} />
        <Stack.Screen name="app" component={app} />
        <Stack.Screen name="firebase" component={firebase} />
        <Stack.Screen name="homescreen" component={homescreen} />
        <Stack.Screen name="paginainicial" component={paginainicial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}