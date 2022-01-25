import React from "react"
import { Pressable, Text, StyleSheet, View } from 'react-native';

export function ScreenADrawer({navigation}) {
  return(
    <View style={styles.body}>
      <Pressable onPress={() => navigation.navigate('Screen_B_Drawer', { ItemFrom: 'Screen A', ItemId: 1 })}>
        <Text>Screen A</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});