import React, { useState } from 'react';
import ButtonSubmit from '../shared/Button/Button';
import Input from '../shared/Input/Input';
import useInput from '../../hooks/useInput';
import useFetching from '../../hooks/useFetching';
import ShortLinkService from '../../services/shortLinkService';
import styles from './MakeShortLink.module.css';
import copyToClipboard from '../../utils/copyToClipboard';
import CopyButton from '../shared/CopyButton/CopyButton';

function MakeShortLink() {
  const [formValue, handleChange] = useInput({ longLink: '' });
  const [shortLink, setShortLink] = useState('');
  const [isCopied, setIsCopied] = useState(false);

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
    setIsCopied(false);
  };

  const handleCopy = () => {
    setIsCopied(true);
    copyToClipboard(`http://79.143.31.216/s/${shortLink}`);
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="longLink"
          value={formValue.longLink}
          onChange={handleChange}
          placeholder="Make a short link"
        />
        <ButtonSubmit type="submit">shorten</ButtonSubmit>
      </form>
      <span className={[styles.result, !shortLink && styles.opacity].join(' ')}>
        Short link:
        <a
          href={`http://79.143.31.216/s/${shortLink}`}
          target="_blank"
          rel="noreferrer"
        >
          http://79.143.31.216/s/{shortLink}
        </a>
        <CopyButton
          onClick={handleCopy}
          isCopied={isCopied}
          doneTextMessage="Copied!"
        />
      </span>
    </div>
  );
}

export default MakeShortLink;
