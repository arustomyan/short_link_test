import React from 'react';
import styles from './Input.module.css';

function Input({
  onChange,
  value,
  name,
  placeholder,
  disabled,
  type,
  className = '',
}) {
  return (
    <input
      name={name}
      className={[styles.root, className].join(' ')}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
    />
  );
}

export default Input;
