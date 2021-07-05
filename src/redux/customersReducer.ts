export interface CustomerType {
  name: string | null,
  id: number,
}

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
export interface addCustomersActionType {
  type: CustomersActionTypes.ADD_CUSTOMERS,
  payload: string,
}
export interface removeCustomersActionType {
  type: CustomersActionTypes.REMOVE_CUSTOMERS,
  payload: number,
}

export type CustomerAction = addCustomersActionType | removeCustomersActionType;

export const customersReducer = (state = initialState, action: CustomerAction): CustomersStateType => {
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

export const addCustomerAction = (payload: CustomerType) => ({
  type: CustomersActionTypes.ADD_CUSTOMERS, payload
});
export const removeCustomerAction = (payload: number) => ({
  type: CustomersActionTypes.REMOVE_CUSTOMERS, payload
});