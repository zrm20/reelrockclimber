import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import { globalStyles } from '../styles/gobalStyles'

// accepts a single stat category that contains a name, average and max
function Stat({ category } ) {
  return(
    <TouchableOpacity style={styles.column}>
      <Text style={styles.headerText}>{category.name}</Text>
      <Text style={styles.dataText}>{category.average}</Text>
      <Text style={styles.text}>avg</Text>
      <Text style={styles.dataText}>{category.max}</Text>
      <Text style={styles.text}>max</Text>
    </TouchableOpacity>
  )
}

// accepts an array of stat categories that contain name, average and max 
export function StatsWidget( { climber } ) {
  const activeClimber = climber;

  if(activeClimber){
    return (
      <View style={globalStyles.widget}>
        <Text style={globalStyles.h2}>Stats</Text>
        <View style={styles.table}>
        {activeClimber.dashStats.map(item => <Stat key={item.key} category={item} />)}
        </View>
      </View>
    );
  }else{
    return(
      <View style={globalStyles.widget}>
          <Text style={globalStyles.h2}>No Stats</Text>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
  },
  headerText:{
    color: 'white',
    fontFamily: 'arial-rounded',
    fontWeight: 'bold',
    fontSize: 20,
  },
  dataText:{
    color: 'white',
    fontFamily: 'arial-rounded',
    fontSize: 20,
  },
  text:{
    color: '#ddd',
    fontFamily: 'arial-rounded'
  },
  table:{
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  column: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});