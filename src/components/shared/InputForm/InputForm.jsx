import React from 'react';
import styles from './InputForm.module.css';

function InputForm({ name, label, value, onChange }) {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}:
      </label>
      <input
        className={styles.input}
        id={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default InputForm;
