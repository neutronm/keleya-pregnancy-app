import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type UserState = {
  name: string;
  email: string | null;
  dueDate: string | null;
  workout: string;
};

const initialState: UserState = {
  name: '',
  email: null,
  dueDate: null,
  workout: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialState,
  reducers: {
    SET_NAME: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    SET_EMAIL: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    SET_DUE_DATE: (state, action: PayloadAction<string>) => {
      state.dueDate = action.payload;
    },
    SET_WORKOUT: (state, action: PayloadAction<string>) => {
      state.workout = action.payload;
    },
  },
});

export const {SET_NAME, SET_EMAIL, SET_DUE_DATE, SET_WORKOUT} =
  userSlice.actions;
export const userReducer = userSlice.reducer;
