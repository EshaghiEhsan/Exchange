/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/tabs";
import {Login} from "./screens";

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
              component={Detail}
          />
          <Stack.Screen
              name="Login"
              component={Login}
          />
          <Stack.Screen
              name="Market"
              component={Market}
          />
          <Stack.Screen
              name="Convert"
              component={Convert}
          />
          <Stack.Screen
              name="Profile"
              component={Profile}
          />
          <Stack.Screen
              name="Order"
              component={Order}
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
