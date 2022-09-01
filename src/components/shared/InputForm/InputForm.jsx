import React from 'react';
import styles from './InputForm.module.css';
import Input from '../Input/Input';

function InputForm({ name, label, value, onChange, disabled, type }) {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}:
      </label>

      <Input
        name={name}
        className={styles.tt}
        id={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
      />
    </>
  );
}

export default InputForm;
