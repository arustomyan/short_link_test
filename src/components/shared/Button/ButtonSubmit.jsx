import React from 'react';
import styles from './ButtonSubmit.module.css';

function ButtonSubmit({ children }) {
  return (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );
}

export default ButtonSubmit;
