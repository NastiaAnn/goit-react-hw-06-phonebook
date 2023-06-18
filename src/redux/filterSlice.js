import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const fiterSlice = createSlice({
  name: 'filter',

  initialState: filterInitialState,

  reducers: {
    handleFilter(state, action) {
      return action.payload;
    },
  },
});

export const { handleFilter } = fiterSlice.actions;
export const filterReducer = fiterSlice.reducer;
