import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../styles/gobalStyles';

export default function CurrentSessionInfo() {
  const dateString = new Date(Date.now()).toDateString();
  const locationString = 'Climb West';
  const settingString = 'Indoors';
  const currentScore = 214;
  const totalRoutes = 15;

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{dateString}</Text>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.locationText}>{locationString}</Text>
      <Text style={styles.settingText}>{settingString}</Text>
      <View style={styles.row}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.totalsText}>Current Score: {currentScore}</Text>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.totalsText}>Total Routes: {totalRoutes}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 5,
    backgroundColor: colors.color3,
    borderRadius: 10,
    padding: '2%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateText: {
    color: colors.color5,
    fontFamily: fonts.bodyFont,
    textAlign: 'center',
    fontSize: 18
  },
  locationText: {
    color: colors.white,
    fontFamily: fonts.bodyFont,
    textAlign: 'center',
    fontSize: 22
  },
  settingText: {
    color: colors.color5,
    fontFamily: fonts.bodyFont,
    textAlign: 'center',
    fontSize: 16
  },
  totalsText: {
    color: colors.white,
    fontFamily: fonts.bodyFont,
    textAlign: 'center',
    fontSize: 16,
  }
})
