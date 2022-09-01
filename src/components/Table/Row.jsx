import React from 'react';

function Row({ originalLink, shortLink, counter }) {
  return (
    <tr>
      <td>{originalLink}</td>
      <td>
        <a href={shortLink}>{shortLink}</a>
      </td>
      <td>{counter}</td>
    </tr>
  );
}

export default Row;
