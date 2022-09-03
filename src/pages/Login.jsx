import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import InputForm from '../components/shared/InputForm/InputForm';
import ButtonSubmit from '../components/shared/Button/Button';
import useFetching from '../hooks/useFetching';
import ShortLinkApi from '../services/shortLinkService';
import AuthContext from '../context/authContext';
import useInput from '../hooks/useInput';

function Login() {
  const [formValue, handleChange] = useInput({ username: '', password: '' });

  const { setIsLogged } = useContext(AuthContext);

  const [fetchLogin, isLoading] = useFetching(async () => {
    const responce = await ShortLinkApi.login(formValue);
    sessionStorage.setItem('token', responce.access_token);
    sessionStorage.setItem('username', formValue.username);
    setIsLogged(true);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLogin();
  };

  return (
    <>
      <h2 className={styles.label}>SIGN IN</h2>
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
          <ButtonSubmit type="submit">Sign in</ButtonSubmit>
          <span>
            Or <Link to="/registration">Sign up</Link>
          </span>
        </div>
      </form>
    </>
  );
}

export default Login;
