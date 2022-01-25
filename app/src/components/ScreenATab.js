import React from "react"
import { Pressable, Text, StyleSheet, View } from 'react-native';

export function ScreenATab({navigation}) {
  return(
    <View style={styles.body}>
      <Text>Screen A</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});