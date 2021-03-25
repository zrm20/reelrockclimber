import React from 'react';
import { Text, Image, TouchableOpacity, View, StyleSheet, } from 'react-native';
import { globalStyles } from '../styles/gobalStyles'

export function LastMonthWidget() {
  return (
    <View style={globalStyles.widget}>
      <Text style={globalStyles.h2}>Last 30 Days</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
  },
});