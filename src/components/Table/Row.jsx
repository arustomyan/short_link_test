import React, { useState } from 'react';
import CopyButton from '../shared/CopyButton/CopyButton';
import copyToClipboard from '../../utils/copyToClipboard';

function Row({ originalLink, shortLink, counter, className = '' }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    copyToClipboard(shortLink);
  };

  return (
    <tr className={className}>
      <td>{originalLink}</td>
      <td>
        <a href={shortLink} target="_blank" rel="noreferrer">
          {shortLink}
        </a>
        <CopyButton onClick={handleCopy} isCopied={isCopied} />
      </td>
      <td>{counter}</td>
    </tr>
  );
}

export default Row;
