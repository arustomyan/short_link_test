import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import InputForm from '../components/shared/InputForm/InputForm';
import ButtonSubmit from '../components/shared/Button/ButtonSubmit';
import useFetching from '../hooks/useFetching';
import ShortLinkApi from '../services/shortLinkService';
import useInput from '../hooks/useInput';

function Registration() {
  const [formValue, handleChange] = useInput({ username: '', password: '' });

  const navigate = useNavigate();

  const [fetchRegistration, isLoading] = useFetching(async () => {
    await ShortLinkApi.register(formValue);
    navigate('/');
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRegistration();
  };

  return (
    <>
      <h2 className={styles.label}>SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <InputForm
          name="username"
          label="Username"
          value={formValue.username}
          onChange={handleChange}
          disabled={isLoading}
          type="text"
        />
        <InputForm
          name="password"
          label="Password"
          value={formValue.password}
          onChange={handleChange}
          disabled={isLoading}
          type="password"
        />
        <div className={styles.authorization}>
          <ButtonSubmit>Registration</ButtonSubmit>
          <span>
            Or <Link to="/">Sign in</Link>
          </span>
        </div>
      </form>
    </>
  );
}

export default Registration;
