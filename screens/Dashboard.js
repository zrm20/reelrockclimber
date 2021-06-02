import React from 'react';
import { View, ScrollView, StyleSheet, } from 'react-native';
import { globalStyles } from '../styles/gobalStyles';
import { ClimberWidget } from '../components/ClimberWidget';
import { StatsWidget } from '../components/StatsWidget';
import { GoalsWidget } from '../components/GoalsWidget';
import { LastMonthWidget } from '../components/LastMonthWidget'
import Climber from '../classes/Climber'

 //testing
  const pic = require('../assets/acr.jpeg');
  let alyssa = new Climber(1, 'Alyssa Reel', pic);
  alyssa.addSession(1, 'west', 5, 1);
  alyssa.sessionList[0].addRoute('boulder', 'v2', 1, true);
  alyssa.sessionList[0].addRoute('boulder', 'v3', 1, true);
  alyssa.sessionList[0].addRoute('topRope', '5.10+', 2, true, 45);
  alyssa.sessionList[0].addRoute('lead', '5.9', 5, false, 20);
  alyssa.sessionList[0].addRoute('lead', '5.7', 1, true, 45);
  alyssa.sessionList[0].addRoute('topRope', '5.10+', 1, true, 45);
  alyssa.sessionList[0].addRoute('topRope', '5.11-', 3, true, 45);
  alyssa.sessionList[0].addRoute('topRope', '5.11+', 8, false, 16);
  alyssa.sessionList[0].addRoute('topRope', '5.11+', 8, false, 16);
  alyssa.goalList = [
    {
      name: "Lead a 5.11",
      progress: .72,
      daysToGo: 33
    },
    {
      name: "Boulder outside",
      progress: .35,
      daysToGo: 63
    }
  ]

//accepts a climber object to pass down data to other widgets

export function Dashboard( { climber } ) {
  const activeClimber = alyssa;
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