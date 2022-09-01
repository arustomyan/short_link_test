import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

function AuthLayout() {
  return (
    <>
      <h1 className={styles.logo}>Short Link</h1>
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
