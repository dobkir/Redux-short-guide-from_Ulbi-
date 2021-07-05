export interface CashStateType {
  cash: number
}

export const initialState: CashStateType = {
  cash: 0,
}

export enum CashActionTypes {
  ADD_CASH = 'ADD_CASH',
  GET_CASH = 'GET_CASH',
}
export interface addCashActionType {
  type: CashActionTypes.ADD_CASH,
  payload: number,
}
export interface getCashActionType {
  type: CashActionTypes.GET_CASH,
  payload: number,
}

export type CashAction = addCashActionType | getCashActionType;

export const cashReducer = (state = initialState, action: CashAction): CashStateType => {
  switch (action.type) {
    case CashActionTypes.ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case CashActionTypes.GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
}

export const addCashAction = (payload: number) => ({ type: CashActionTypes.ADD_CASH, payload });
export const getCashAction = (payload: number) => ({ type: CashActionTypes.GET_CASH, payload });

