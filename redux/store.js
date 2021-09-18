import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import climbersReducer from './ClimbersSlice';

const reducer = combineReducers({
  climbers: climbersReducer
})

export default configureStore({
  reducer: {
    climbers: climbersReducer
  }
})
