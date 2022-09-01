import React from 'react';
import Row from './Row';
import styles from './Table.module.css';
import data from '../../fakeData.json';

function Table() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>link</th>
          <th>short link</th>
          <th>counter</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <Row
            originalLink={item.target}
            shortLink={`http://79.143.31.216/s/${item.short}`}
            counter={item.counter}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
