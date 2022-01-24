import React from "react"
import { Pressable, Text, StyleSheet, View } from 'react-native';

export default function ScreenA({navigation}) {
  return(
    <View style={styles.body}>
      <Text>Screen A</Text>
      <Pressable onPress={() => {navigation.navigate('Screen_B')}}>
        <Text>Go to Screen B</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});