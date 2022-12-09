import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ClickScreen from './components/ClickScreen';
import HomeStack from './stack/HomeStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import theme from './themes/default.ts';

const Tab = createMaterialBottomTabNavigator();

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer >
        <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
          <Tab.Screen name="Accueil" component={HomeStack} options={{
            title: 'Fruit',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="fruit-watermelon" size={24} color={theme.colors.pink} />
            ),             
          }}/>
          <Tab.Screen name="Click" component={ClickScreen} options={{
            title: 'Click',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="cursor-default-click" size={24} color={theme.colors.pink} />
            ),       
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
