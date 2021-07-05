import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cashReducer } from './cashReduser';
import { customersReducer } from './customersReduser';


const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());

export type AppStateType = ReturnType<typeof rootReducer>;
