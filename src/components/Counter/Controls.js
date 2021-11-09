import React from 'react';
import styles from './Counter.module.css';

const Controls = ({ step, onIncrement, onDecrement }) => (
  <div className={styles.Counter__controls}>
    <button type="button" onClick={onDecrement}>
      Уменьшить на {step}
    </button>
    <button type="button" onClick={onIncrement}>
      Увеличить на {step}
    </button>
  </div>
);

export default Controls;
