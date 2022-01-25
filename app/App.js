import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavDrawer } from './src/components'

function App() {
  return (
    <>
    <NavDrawer />
    </>
  )
};

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});

export default App;
