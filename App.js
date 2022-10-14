import React, { useState } from "react";
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ClickScreen from "./components/ClickScreen";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Click" component={ClickScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  );
}


