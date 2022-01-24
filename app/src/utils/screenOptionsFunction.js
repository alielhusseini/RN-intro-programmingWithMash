import React from 'react'

export function screenOptionsFunction({ route, navigation }) {
    return {
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#008ecc' },
        headerTitleAlign: 'center',
        // headerRight: () => route.name === 'Cash_Price' && <TouchableOpacity onPress={() => navigation.navigate('Settings')}><FontAwesome5 size={20} color={"#fff"}  name='cog' /></TouchableOpacity>,
        // headerLeft: () => route.name === 'Settings' && <TouchableOpacity onPress={() => navigation.navigate('Cash_Price', { info: Math.random() })}><FontAwesome5 size={20} color={"#fff"}  name='arrow-left' /></TouchableOpacity>,
    }
}