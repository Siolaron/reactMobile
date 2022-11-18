import React, { useState } from "react";
import { StyleSheet, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ClickScreen from "./components/ClickScreen";
import HomeStack from "./stack/HomeStack";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const Tab = createMaterialBottomTabNavigator();

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer >
      <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
        <Tab.Screen name="Accueil" component={HomeStack} options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
              source={require('./assets/index.png')                  
              }/>
         ), 
         tabBarLabel: ''             
        }}/>
        <Tab.Screen name="Click" component={ClickScreen} options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
              source={require('./assets/click.png')                  
              }/>
         ), 
         tabBarLabel: ''             
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
   
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
      width: 40,
      height: 40,
    },
  tabNavigation: {
    backgroundColor: 'white'
  }
});
