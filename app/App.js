import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator()

function screenOptionsFunction({route, navigation}) {
  return {
    headerTintColor: 'white', 
    headerStyle: {backgroundColor: '#008ecc'},
    headerTitleAlign: 'center',
    // headerRight: () => route.name === 'Cash_Price' && <TouchableOpacity onPress={() => navigation.navigate('Settings')}><FontAwesome5 size={20} color={"#fff"}  name='cog' /></TouchableOpacity>,
    // headerLeft: () => route.name === 'Settings' && <TouchableOpacity onPress={() => navigation.navigate('Cash_Price', { info: Math.random() })}><FontAwesome5 size={20} color={"#fff"}  name='arrow-left' /></TouchableOpacity>,
  }
}

function ScreenA({navigation}) {
  return(
    <View style={styles.body}>
      <Text>Screen A</Text>
      <Pressable onPress={() => {navigation.navigate('Screen_B')}}>
        <Text>Go to Screen B</Text>
      </Pressable>
    </View>
  )
}

function ScreenB({navigation}) {
  return(
    <View style={styles.body}>
      <Text>Screen B</Text>
      <Pressable onPress={() => {navigation.goBack()}}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  )
}

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionsFunction}>
        <Stack.Screen name="Screen_A" component={ScreenA} options={{header: () => null}} />
        <Stack.Screen name="Screen_B" component={ScreenB} options={{title: 'Screen B'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});

export default App;
