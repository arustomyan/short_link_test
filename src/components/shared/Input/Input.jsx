import React from 'react';
import styles from './Input.module.css';

function Input({ onChange, value, name, placeholder, className = '' }) {
  return (
    <input
      className={[styles.root, className].join(' ')}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
