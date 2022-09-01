import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import InputForm from '../components/shared/InputForm/InputForm';
import ButtonSubmit from '../components/shared/Button/ButtonSubmit';

function Login() {
  return (
    <>
      <h2 className={styles.label}>SIGN IN</h2>
      <form>
        <InputForm name="username" label="Username" />
        <InputForm name="password" label="Password" />
        <div className={styles.authorization}>
          <ButtonSubmit>Sign in</ButtonSubmit>
          <span>
            Or <Link to="/registration">Sign up</Link>
          </span>
        </div>
      </form>
    </>
  );
}

export default Login;
