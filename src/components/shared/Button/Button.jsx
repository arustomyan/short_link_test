import React from 'react';
import styles from './Button.module.css';

function Button({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) {
  return (
    <button
      // eslint-disable-next-line
      type={type}
      className={[styles.button, className].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
