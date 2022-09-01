import React from 'react';
import styles from './MakeShortLink.module.css';
import ButtonSubmit from '../shared/Button/ButtonSubmit';
import Input from '../shared/Input/Input';

function MakeShortLink() {
  const link = true;
  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <Input className={styles.input} placeholder="Make a short link" />
        <ButtonSubmit>shorten</ButtonSubmit>
      </form>
      {link && (
        <span>
          Short link:{' '}
          <a href="http://79.143.31.216/s/">http://79.143.31.216/s/</a>
        </span>
      )}
    </div>
  );
}

export default MakeShortLink;
