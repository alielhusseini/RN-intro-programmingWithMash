import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenA, ScreenB } from './index'
import { screenOptionsFunction } from '../utils/screenOptionsFunction'

const Stack = createNativeStackNavigator()

export default function Nav() {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptionsFunction}>
            <Stack.Screen name="Screen_A" component={ScreenA} options={{header: () => null}} />
            <Stack.Screen name="Screen_B" component={ScreenB} options={{title: 'Screen B'}}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
}