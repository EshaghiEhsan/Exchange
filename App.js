/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import * as Screen from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();
const App= () => {

  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName={'Home'}
        >
          <Stack.Screen
              name="Home"
              component={Tabs}
          />
          <Stack.Screen
              name="Detail"
              component={Screen.Detail}
          />
          <Stack.Screen
              name="Login"
              component={Screen.Login}
          />
          <Stack.Screen
              name="Market"
              component={Screen.Market}
          />
          <Stack.Screen
              name="Convert"
              component={Screen.Convert}
          />
          <Stack.Screen
              name="Profile"
              component={Screen.Profile}
          />
          <Stack.Screen
              name="Order"
              component={Screen.Order}
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
