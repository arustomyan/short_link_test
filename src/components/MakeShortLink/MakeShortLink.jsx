import React, { useState } from 'react';
import ButtonSubmit from '../shared/Button/Button';
import Input from '../shared/Input/Input';
import useInput from '../../hooks/useInput';
import useFetching from '../../hooks/useFetching';
import ShortLinkService from '../../services/shortLinkService';
import styles from './MakeShortLink.module.css';

function MakeShortLink() {
  const [formValue, handleChange] = useInput({ longLink: '' });
  const [shortLink, setShortLink] = useState('');

  const [fetchShortLink] = useFetching(async () => {
    const responce = await ShortLinkService.createShortLink(
      formValue.longLink,
      sessionStorage.getItem('token')
    );
    setShortLink(responce.short);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchShortLink();
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="longLink"
          className={styles.input}
          value={formValue.longLink}
          onChange={handleChange}
          placeholder="Make a short link"
        />
        <ButtonSubmit type="submit">shorten</ButtonSubmit>
      </form>
      <span className={!shortLink && styles.opacity}>
        Short link:{' '}
        <a
          href={`http://79.143.31.216/s/${shortLink}`}
          target="_blank"
          rel="noreferrer"
        >
          http://79.143.31.216/s/{shortLink}
        </a>
      </span>
    </div>
  );
}

export default MakeShortLink;
