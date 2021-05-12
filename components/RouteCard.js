import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import {globalStyles} from '../styles/gobalStyles'

//todo add high score trophy

export function RouteCard({ route }){
  return(
    <View style={styles.container}>
      <View style={styles.infoHeader}>
        <Text style={styles.idText}>Session #{route.sessionId}</Text>
        <Text style={styles.idText}>Route #{route.id}</Text>
      </View>

      <Text style={styles.title}>{route.typeName}</Text>

      <View style={styles.infoBody}>
        <View style={styles.infoCol}>
          <Text style={styles.dataText}>{route.ratingName}</Text>
          <Text style={styles.dataText}>{route.score} Points</Text>
        </View>

        <View style={styles.infoCol}>
          <Text style={styles.dataText}>Height: {route.height ? route.height : 'N/A'}</Text>
          <Text style={styles.dataText}>Attempts: {route.attempts}</Text>
        </View>
      </View>

      <View style={styles.iconRow}>
        <View style={styles.icon}>
          {route.isSent ? <Feather name='check' size={30} color='white'/> : <Feather name='x' size={30} color='red'/>}
          <Text style={styles.iconText}>SENT</Text>
        </View>

        <View style={styles.icon}>
          {route.isFlashed ? <Feather name='check' size={30} color='white'/> : <Feather name='x' size={30} color='red'/>}
          <Text style={styles.iconText}>FLASH</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    backgroundColor: globalStyles.secondaryBackground.backgroundColor,
    margin: 6
  },

  infoHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  idText: {
    color: globalStyles.bodyFont.color,
    fontFamily: globalStyles.bodyFont.fontFamily
  },

  title: {
    textAlign: 'center',
    color: globalStyles.headerFont.color,
    fontFamily: globalStyles.headerFont.fontFamily,
    fontSize: 22,
  },
  
  infoBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoCol: {
    margin: 8,
  },

  dataText: {
    color: globalStyles.bodyFont.color,
    fontFamily: globalStyles.bodyFont.fontFamily,
    fontSize: 18,
  },

  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  icon: {
    flexDirection: 'row',
    alignContent: 'center',
    borderColor: globalStyles.primaryBorder.borderColor,
    borderWidth: 3,
    borderRadius: 15,
    padding: 4,
    width: 130
  },
  iconText: {
    color: globalStyles.bodyFont.color,
    fontFamily: globalStyles.bodyFont.fontFamily,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 3
  }
});