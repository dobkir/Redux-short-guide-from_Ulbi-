export interface CustomerType {
  name: string | null,
  id: number,
}

// export let customer: CustomerType = {
//   name: "Customers:",
//   id: 0,
// };

export interface CustomersStateType {
  customers: any[]
}

export const initialState: CustomersStateType = {
  customers: []
}

export enum CustomersActionTypes {
  ADD_CUSTOMERS = 'ADD_CUSTOMERS',
  REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS',
}
export interface AddCustomersAction {
  type: CustomersActionTypes.ADD_CUSTOMERS,
  payload: string,
}
export interface RemoveCustomersAction {
  type: CustomersActionTypes.REMOVE_CUSTOMERS,
  payload: number,
}

export type CustomerAction = AddCustomersAction | RemoveCustomersAction;

export const customersReducer = (state = initialState, action: CustomerAction) => {
  switch (action.type) {
    case CustomersActionTypes.ADD_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, action.payload]
      };
    case CustomersActionTypes.REMOVE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.filter(
          customer => customer.id !== action.payload
        )
      };
    default:
      return state;
  }
}
