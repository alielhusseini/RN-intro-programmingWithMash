import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenAStack, ScreenBStack } from './index'
import { screenOptionsFunction } from '../utils/screenOptionsFunction'

const Stack = createNativeStackNavigator()

export default function NavStack() {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptionsFunction}>
            <Stack.Screen name="Screen_A_Stack" component={ScreenAStack} options={{header: () => null}} />
            <Stack.Screen name="Screen_B_Stack" component={ScreenBStack} options={{title: 'Screen B'}}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
}