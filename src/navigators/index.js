import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from 'components/Home';
import Create from 'components/Create';
import Settings from 'components/Settings';

const Drawer = createDrawerNavigator();

// Home
// Create
// User Settings

export default function RootNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Create" component={Create} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
