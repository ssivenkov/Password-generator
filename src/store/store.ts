import { combineReducers, createStore, compose } from 'redux';

import { createPasswordActionsType } from './actions/CreatePasswordActions';
import { createPasswordReducer } from './reducers/CreatePasswordReducer';

const rootReducer = combineReducers({
  createPassword: createPasswordReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppActionsType = createPasswordActionsType;
