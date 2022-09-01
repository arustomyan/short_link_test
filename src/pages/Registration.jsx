import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import InputForm from '../components/shared/InputForm/InputForm';
import ButtonSubmit from '../components/shared/Button/ButtonSubmit';

function Registration() {
  return (
    <>
      <h2 className={styles.label}>SIGN UP</h2>
      <form>
        <InputForm name="username" label="Username" />
        <InputForm name="password" label="Password" />
        <div className={styles.authorization}>
          <ButtonSubmit>Sign up</ButtonSubmit>
          <span>
            Or <Link to="/">Sign in</Link>
          </span>
        </div>
      </form>
    </>
  );
}

export default Registration;
