import React from "react"
import { Pressable, Text, StyleSheet, View } from 'react-native';

export default function ScreenBTab({navigation}) {
  return(
    <View style={styles.body}>
      <Text>Screen B</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});