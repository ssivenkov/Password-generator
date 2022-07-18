import { combineReducers, createStore } from 'redux';

import { createPasswordReducer } from './reducers/createPasswordReducer/createPasswordReducer';

const rootReducer = combineReducers({
  createPassword: createPasswordReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
