import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import createPasswordReducer from 'redux/reducers/createPasswordSlice/CreatePasswordSlice';

const rootReducer = combineReducers({
  createPasswordReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export type AppRootState = ReturnType<typeof rootReducer>;
