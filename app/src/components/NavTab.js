import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenATab, ScreenBTab } from './index'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator()
// const Tab = createMaterialBottomTabNavigator()
const Tab = createMaterialTopTabNavigator();

export default function NavTab() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route, navigation}) => ({
            tabBarIcon: ({focused, size, color}) => {
              let iconName
              if (route.name === 'Screen_A_Tab') {
                iconName = 'autoprefixer'
                size = focused ? 20 : 15
                // color = focused ? 'purple' : "black"
              } else if (route.name === 'Screen_B_Tab') {
                iconName = 'btc'
                size = focused ? 20 : 15
                // color = focused ? 'purple' : "black"
              }
              return <FontAwesome5 name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: 'white',
            tabBarActiveBackgroundColor: 'blue', // or add inactive
            tabBarInactiveTintColor: 'gray',
            // tabBarShowIcon: false,
            // tabBarShowLabel: false,
            // tabBarLabelStyle: {
            //   fontSize: 15
            // },
            tabBarStyle: {
              paddingVertical: Platform.OS === 'ios' ? 20 : 0,
              // height: 78,
              backgroundColor: 'white',
            },
          })}
          // material
          activeColor="black"
          inactiveColor="gray"
          barStyle={{
            backgroundColor: 'white'
          }}
        >
          <Tab.Screen name="Screen_A_Tab" component={ScreenATab} />
          <Tab.Screen name="Screen_B_Tab" component={ScreenBTab} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
