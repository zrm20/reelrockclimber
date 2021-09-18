import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { colors, fonts } from '../styles/gobalStyles';

export default function RoutesScroller() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Routes</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.typeHeader}>Boulder</Text>
        <Text style={styles.typeHeader}>Top-Rope</Text>
        <Text style={styles.typeHeader}>Lead</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 5,
    padding: '1%'
  },
  title: {
    color: colors.color4,
    fontFamily: fonts.bodyFont,
    fontSize: 20,
    margin: 3
  },
  scrollView: {
    backgroundColor: colors.color3,
    borderRadius: 8,
  },
  typeHeader: {
    backgroundColor: colors.color5,
    textAlign: 'center',
    fontFamily: fonts.bodyFont,
    fontSize: 18,
    marginVertical: 4
  }
})
