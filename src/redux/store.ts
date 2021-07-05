import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cashReducer } from './cashReducer';
import { customersReducer } from './customersReducer';


const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());

export type AppStateType = ReturnType<typeof rootReducer>;
