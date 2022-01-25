import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenBDrawer, ScreenADrawer } from './index'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export function NavDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Screen_A_Drawer'
          drawerPosition="right"
          drawerType='front'
        >
          <Drawer.Screen name="Screen_A_Drawer" component={ScreenADrawer} />
          <Drawer.Screen name="Screen_B_Drawer" component={ScreenBDrawer} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}
