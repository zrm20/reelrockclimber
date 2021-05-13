import React from 'react';
import { Text, View, ScrollView, StyleSheet, } from 'react-native';
import { globalStyles } from '../styles/gobalStyles';
import { ClimberWidget } from '../components/ClimberWidget';
import { StatsWidget } from '../components/StatsWidget';
import { GoalsWidget } from '../components/GoalsWidget';
import { LastMonthWidget } from '../components/LastMonthWidget'

//accepts a climber object to pass down data
export function Dashboard( { climber } ) {
  return(
    <View style={styles.container}>
      <Text style={globalStyles.h1}>ReelRock Climber</Text>
      <ClimberWidget climber={climber} />
      <ScrollView style={styles.body}>
        <View style={styles.bodyContent}>
          <StatsWidget categories={climber.dashStats}/>
          <LastMonthWidget />
          {/* <GoalsWidget goalList={climber.goalList}/> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
  },
  nav: {
    backgroundColor: globalStyles.secondaryBackground.backgroundColor,
    width: '100%',
    height: 80,
    alignItems: 'center',
  }
});