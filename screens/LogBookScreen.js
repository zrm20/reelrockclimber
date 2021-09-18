import React from 'react';
import { Text, View, ScrollView, StyleSheet, } from 'react-native';
import { colors, globalStyles } from '../styles/gobalStyles';

export default function LogBookScreen() {
  return (
  <View style={styles.container}>
    <Text> Log Book </Text>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color1,
    alignItems: 'center',
    padding: '2%'
  },
});