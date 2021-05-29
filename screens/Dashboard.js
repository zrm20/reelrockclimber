import React from 'react';
import { View, ScrollView, StyleSheet, } from 'react-native';
import { globalStyles } from '../styles/gobalStyles';
import { ClimberWidget } from '../components/ClimberWidget';
import { StatsWidget } from '../components/StatsWidget';
import { GoalsWidget } from '../components/GoalsWidget';
import { LastMonthWidget } from '../components/LastMonthWidget'

//accepts a climber object to pass down data
export function Dashboard( { climber } ) {
  const activeClimber = climber;
    return(
      <View style={styles.container}>
        <ClimberWidget climber={activeClimber} />
        <ScrollView style={styles.body}>
          <View style={styles.bodyContent}>
            <StatsWidget climber={activeClimber}/>
            <LastMonthWidget />
            <GoalsWidget climber={activeClimber}/>
          </View>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 3,
    backgroundColor: globalStyles.mainBackground.backgroundColor,
    alignItems: 'center',
  },
  body: {
    width: '100%',
    flex: 1,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
  }
});