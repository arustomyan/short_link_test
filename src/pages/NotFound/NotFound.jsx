import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.root}>
      <h2 className={styles.label}>404</h2>
      <p>
        The page was not found <br />
        or you do not have access
      </p>

      <div className={styles.otherFeatures}>
        <Link to="/">Sign in</Link> or <Link to="/registration">register</Link>
      </div>
    </div>
  );
}

export default NotFound;
