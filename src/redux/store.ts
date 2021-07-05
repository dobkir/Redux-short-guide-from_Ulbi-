import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { cashReducer } from './cashReducer';
import { customersReducer } from './customersReducer';


const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppStateType = ReturnType<typeof rootReducer>;
