import { createSlice } from "@reduxjs/toolkit";

export const climbersSlice = createSlice({
  name: 'climbers',
  initialState: {
    value: []
  },
  reducers: {

  }
});

export const { } = climbersSlice.actions;

export default climbersSlice.reducers;