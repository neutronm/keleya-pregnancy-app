import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userReducer} from './slices/userSlice';
const rootReducer = combineReducers({
  userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
