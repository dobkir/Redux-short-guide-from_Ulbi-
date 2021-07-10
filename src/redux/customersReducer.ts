export interface CustomerType {
  name: string | null,
  id: number,
}

export interface CustomersStateType {
  customers: Array<CustomerType>
}

export const initialState: CustomersStateType = {
  customers: [] as Array<CustomerType>
}

export enum CustomersActionTypes {
  ADD_CUSTOMERS_LIST = 'ADD_CUSTOMERS_LIST',
  ADD_CUSTOMERS = 'ADD_CUSTOMERS',
  REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS',
}
export interface addCustomersListActionType {
  type: CustomersActionTypes.ADD_CUSTOMERS_LIST,
  payload: [],
}
export interface addCustomersActionType {
  type: CustomersActionTypes.ADD_CUSTOMERS,
  payload: CustomerType,
}
export interface removeCustomersActionType {
  type: CustomersActionTypes.REMOVE_CUSTOMERS,
  payload: number,
}

export type CustomerAction = addCustomersListActionType | addCustomersActionType | removeCustomersActionType;

export const customersReducer = (state = initialState, action: CustomerAction): CustomersStateType => {
  switch (action.type) {
    case CustomersActionTypes.ADD_CUSTOMERS_LIST:
      return {
        ...state,
        customers: [...state.customers, ...action.payload]
      }
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
};

export const addCustomersListAction = (payload: []): addCustomersListActionType => ({
  type: CustomersActionTypes.ADD_CUSTOMERS_LIST, payload
});
export const addCustomersAction = (payload: CustomerType): addCustomersActionType => ({
  type: CustomersActionTypes.ADD_CUSTOMERS, payload
});
export const removeCustomersAction = (payload: number): removeCustomersActionType => ({
  type: CustomersActionTypes.REMOVE_CUSTOMERS, payload
});
