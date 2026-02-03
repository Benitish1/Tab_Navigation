import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './index';
import Services from './services';
import Explore from './exploring';
const BottomTab = createBottomTabNavigator();

export default function Tab() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Services" component={Services} />
      <BottomTab.Screen name="Explore" component={Explore} />
    </BottomTab.Navigator>
  );
}

