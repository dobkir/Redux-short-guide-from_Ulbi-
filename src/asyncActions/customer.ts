
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { addCustomersListAction, CustomerAction } from '../redux/customersReducer';
import { AppStateType } from '../redux/store';

type DispatchType = Dispatch<CustomerAction>;
type ThunkType = ThunkAction<void, AppStateType, unknown, CustomerAction>;


export const fetchCustomersList = (): ThunkType => {
  return function (dispatch: DispatchType) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addCustomersListAction(json)))
  }
}
