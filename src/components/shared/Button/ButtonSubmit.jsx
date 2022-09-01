import React from 'react';
import styles from './ButtonSubmit.module.css';

function ButtonSubmit({ children, onClick }) {
  return (
    <button type="submit" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonSubmit;
