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
          drawerType='back'
          edgeWidth={500}
          hideStatusBar={true}
          overlayColor='#00000090'
          drawerStyle={{
            backgroundColor: 'blue',
            width: 250
          }}
          screenOptions={{
            swipeEnabled: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'gray'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <Drawer.Screen name="Screen_A_Drawer" component={ScreenADrawer} options={{title: 'Draw A', drawerIcon: ({focused}) => <FontAwesome5 name='btc' size={focused ? 20 : 15} color={focused ? 'blue' : 'gray'}/>}} />
          <Drawer.Screen name="Screen_B_Drawer" component={ScreenBDrawer} options={{title: 'Draw B', drawerIcon: ({focused}) => <FontAwesome5 name='btc' size={focused ? 20 : 15} color={focused ? 'blue' : 'gray'}/>}} initialParams={{fromDrawer: 'YES FROM TOP'}} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}
