import { createSlice, configureStore } from '@reduxjs/toolkit'
import Climber from '../classes/Climber';

//testing
  let alyssa = new Climber(1, 'Alyssa Reel', 'file:///Users/zachmccoy/Dev/reelrockclimber/assets/acr.jpeg');
  alyssa.addSession(1, 'west', 5, 1);
  alyssa.sessionList[0].addRoute('boulder', 'v2', 1, true);
  alyssa.sessionList[0].addRoute('boulder', 'v3', 1, true);
  alyssa.sessionList[0].addRoute('topRope', '5.10+', 2, true, {height: 45});
  alyssa.sessionList[0].addRoute('lead', '5.9', 5, false, {height: 20});
  alyssa.sessionList[0].addRoute('lead', '5.7', 1, true, {height: 45});
  alyssa.sessionList[0].addRoute('topRope', '5.10+', 1, true, {height: 45});
  alyssa.sessionList[0].addRoute('topRope', '5.11-', 3, true, {height: 45});
  alyssa.sessionList[0].addRoute('topRope', '5.11+', 8, false, {height: 16});
  alyssa.sessionList[0].addRoute('topRope', '5.11+', 8, false, {height: 16});
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

  let zach = new Climber(2, 'Zach McCoy', 'file:///Users/zachmccoy/Dev/reelrockclimber/assets/zm.jpeg');
  zach.addSession(1, 'east', 3, 1);
  zach.sessionList[0].addRoute('lead', '5.9', 1, true, {height: 45});
  zach.sessionList[0].addRoute('topRope', '5.10-', 2, true, {height: 45});
  zach.sessionList[0].addRoute('boulder', 'v4', 3, true);
  zach.sessionList[0].addRoute('boulder', 'v1', 7, false);
//end testing

const climberListSlice = createSlice({
  name: 'climberList',
  initialState: [
    alyssa,
    zach
  ],
  reducers: {
    //add a new climber to the list of climbers
    addClimber: (state, action) => {
      state.push(action.payload)
      console.log(action.payload.name + " added to the climberList")
      console.log(action.payload.picUri)
    },
    //removes a climber based on the climber id
    removeClimberById: (state, idToRemove) => {
      state.pop()
    }
  }
})

export const { addClimber, removeClimberById } = climberListSlice.actions

const activeClimberIndexSlice = createSlice({
  name: 'activeClimberIndex',
  initialState: 1,
  reducers: {
    
  }
})

export const store = configureStore({
  reducer: {
    climberList: climberListSlice.reducer,
    activeClimberIndex: activeClimberIndexSlice.reducer
  }
})
