
import { Dispatch } from 'react';
import { addCustomersListAction, CustomerAction } from '../redux/customersReducer';


export const fetchCustomersList = () => {
  return function (dispatch: Dispatch<CustomerAction>) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addCustomersListAction(json)))
  }
}