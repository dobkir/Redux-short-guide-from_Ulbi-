import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.scss';
import { addCashAction, getCashAction } from './redux/cashReducer';
import { addCustomersAction, CustomerType, removeCustomersAction } from './redux/customersReducer';
import { AppStateType } from './redux/store';
import { fetchCustomersList } from './asyncActions/customer';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state: AppStateType) => state.cash.cash);
  const customers = useSelector((state: AppStateType) => state.customers.customers);

  const addCash = (cash: number) => {
    dispatch(addCashAction(cash))
  };
  const getCash = (cash: number) => {
    dispatch(getCashAction(cash))
  };

  const addCustomer = (name: string | null) => {
    const customer: CustomerType = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomersAction(customer));
  };

  const removeCustomer = (customer: CustomerType) => {
    dispatch(removeCustomersAction(customer.id))
  };

  return (
    <div className={styles.container}>
      <div className={styles.cashAmount}>
        Money into your account:<br />{cash}
      </div>
      <div className={styles.buttonsArea}>
        <button onClick={() => addCash(Number(prompt("How much cash do you want to add?", "")))}
          className={`${styles.button} ${styles.buttonBlue}`}>
          ADD CASH
        </button>
        <button onClick={() => getCash(Number(prompt("How much cash do you want to get?", "")))}
          className={`${styles.button} ${styles.buttonRed}`}>
          GET CASH
        </button>
      </div>

      <div className={styles.buttonsArea}>
        <button onClick={() => addCustomer(prompt("What customer do you want to add?", ""))}
          className={`${styles.button} ${styles.buttonBlue}`}>
          ADD A CUSTOMER
        </button>
      </div>

      <div className={styles.buttonsArea}>
        <button onClick={() => dispatch(fetchCustomersList())}
          className={`${styles.button} ${styles.buttonBlue}`}>
          GET CUSTOMERS LIST
        </button>
      </div>

      {customers.length > 0 ?
        <div>
          {customers.map((customer: CustomerType, index: number) =>
            <div className={styles.customer} onClick={() => removeCustomer(customer)}
              data-title="Click on the name to remove it from the list" key={`${customer.name} ${index}`}>
              {customer.name}
            </div>
          )}
        </div>
        :
        <div style={{ fontSize: "2rem", marginTop: 20 }}>
          There are no customers!
        </div>
      }
    </div>
  );
}

export default App;
