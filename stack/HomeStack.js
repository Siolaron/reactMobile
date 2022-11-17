import React, { useState } from "react";
import HomeScreen from '../components/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FruitScreen from "../components/FruitScreen";


const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Liste des fruits' }}/>
        <Stack.Screen name="FruitScreen" component={FruitScreen} options={{ title: 'Mon fruit' }}/>
      </Stack.Navigator>
  );
}