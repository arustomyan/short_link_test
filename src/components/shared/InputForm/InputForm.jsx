import React from 'react';
import styles from './InputForm.module.css';
import Input from '../Input/Input';

function InputForm({ name, label, value, onChange }) {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}:
      </label>

      <Input
        className={styles.tt}
        id={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default InputForm;
