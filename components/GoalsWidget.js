import React from 'react';
import * as Progress from 'react-native-progress';
import { Text, TouchableOpacity, View, StyleSheet, } from 'react-native';
import { colors, fonts, globalStyles } from '../styles/gobalStyles';
import { Foundation } from '@expo/vector-icons';

// This widget accepts a climber object that contains an array goalsList. The goals list array should contain a list of goal objects with they keys name, progess and days to go.


function Goal({ goal }){
  return(
    <TouchableOpacity style={styles.row}>
      <Foundation name="target-two" size={32} color={colors.color4} />
      <View>
        <View style={styles.progressContainer}>
          <Text style={styles.text}>{goal.name}</Text>
          <Progress.Bar 
            progress={goal.progress} 
            color={colors.color2} 
            borderColor={colors.color4}
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
    color: colors.white,
    fontFamily: fonts.bodyFont
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