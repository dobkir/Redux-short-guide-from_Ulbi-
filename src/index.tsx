import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export interface CashType {
  cash: number
}

export let initialState: CashType = {
  cash: 0,
}

export enum CashActionTypes {
  ADD_CASH = 'ADD_CASH',
  GET_CASH = 'GET_CASH ',
}
export interface AddCashAction {
  type: CashActionTypes.ADD_CASH,
  payload: number,
}
export interface GetCashAction {
  type: CashActionTypes.GET_CASH,
  payload: number,
}

export type CashAction = AddCashAction | GetCashAction;

export const reduser = (state = initialState, action: CashAction) => {
  switch (action.type) {
    case CashActionTypes.ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case CashActionTypes.GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
}

export const store = createStore(reduser);

export type AppStateType = ReturnType<typeof reduser>;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
