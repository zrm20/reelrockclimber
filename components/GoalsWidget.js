import React from 'react';
import * as Progress from 'react-native-progress';
import { Text, TouchableOpacity, View, StyleSheet, } from 'react-native';
import { globalStyles } from '../styles/gobalStyles';
import { Foundation } from '@expo/vector-icons';

function Goal({ goal }){
  return(
    <TouchableOpacity style={styles.row}>
      <Foundation name="target-two" size={32} color="#9ac6c5" />
      <View>
        <View style={styles.progressContainer}>
          <Text style={styles.text}>{goal.name}</Text>
          <Progress.Bar 
            progress={goal.progress} 
            color={'#5b2a86'} 
            borderColor={'#9ac6c5'}
            width={300}
            height={10}
            borderRadius={10}
          />
          <Text style={styles.text}>{goal.daysToGo} Days to Go</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export function GoalsWidget({ climber }) {
  const activeClimber = climber
  
  if(activeClimber){
    return (
      <View style={globalStyles.widget}>
        <Text style={globalStyles.h2}>Goals</Text>
        {activeClimber.goalList.map(item => <Goal key={item.key} goal={item}/>)}
      </View>
    );
  }else{
    return(
      <View style={globalStyles.widget}>
          <Text style={globalStyles.h2}>No Goals Saved</Text>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
  },
  text:{
    color: 'white',
    fontFamily: 'arial-rounded'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressContainer: {
    flex: 1,
    marginHorizontal: 3,
    padding: 5,
  }
});