import React from "react"
import { Pressable, Text, View, StyleSheet } from 'react-native';

export default function ScreenB({navigation}) {
  return(
    <View style={styles.body}>
      <Text>Screen B</Text>
      <Pressable onPress={() => {navigation.goBack()}}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});