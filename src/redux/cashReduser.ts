export interface CashType {
  cash: number
}

export const initialState: CashType = {
  cash: 0,
}

export enum CashActionTypes {
  ADD_CASH = 'ADD_CASH',
  GET_CASH = 'GET_CASH',
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

export const cashReducer = (state = initialState, action: CashAction) => {
  switch (action.type) {
    case CashActionTypes.ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case CashActionTypes.GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
}