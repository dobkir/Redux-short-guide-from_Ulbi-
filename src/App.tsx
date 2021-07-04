import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, CashActionTypes, RootState } from './index';

import styles from './App.module.scss';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cash: number = useSelector((state: RootState) => state.cash);

  const addCash = (cash: number) => {
    dispatch({ type: CashActionTypes.ADD_CASH, payload: cash })
  };
  const getCash = (cash: number) => {
    dispatch({ type: CashActionTypes.GET_CASH, payload: cash })
  };

  return (
    <div className={styles.container}>
      <div className={styles.cashAmount}>
        Money into your account:<br />{cash}
      </div>
      <div className={styles.buttonsArea}>
        <button onClick={() => addCash(Number(prompt("How much cash do you want to add?")))}
          className={`${styles.button} ${styles.buttonBlue}`}>
          ADD CASH
        </button>
        <button onClick={() => getCash(Number(prompt("How much cash do you want to get?")))}
          className={`${styles.button} ${styles.buttonRed}`}>
          GET CASH
        </button>
      </div>
    </div>
  );
}

export default App;
