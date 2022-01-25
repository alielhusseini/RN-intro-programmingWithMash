import React from "react"
import { Pressable, Text, StyleSheet, View } from 'react-native';

export function ScreenBDrawer({navigation, route}) {

  const { ItemFrom, ItemId, fromDrawer } = route.params

  return(
    <View style={styles.body}>
      <Text>Screen B</Text>
      <Text>{`id: ${ItemId}, from ${ItemFrom}`}</Text>
      <Pressable onPress={() => navigation.setParams({ ItemId: 2, ItemFrom: 'B' })}><Text>UPDATE ID</Text></Pressable>
      <Text>{`From Drawer: ${fromDrawer}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});