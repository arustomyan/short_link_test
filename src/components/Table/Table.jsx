import React, { useEffect, useState } from 'react';
import Row from './Row';
import useFetching from '../../hooks/useFetching';
import ShortLinkApi from '../../services/shortLinkService';
import Pagination from '../Pagination/Pagination';
import styles from './Table.module.css';

function Table() {
  const [links, setLinks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(10);

  const [fetchLinks] = useFetching(async (token, index, lim) => {
    const response = await ShortLinkApi.statistics(token, index, lim);
    setLinks(response);
  });

  useEffect(() => {
    const token = JSON.stringify(sessionStorage.getItem('token'));
    fetchLinks(token, offset, limit);
  }, [offset, limit]);

  const handlePrevPage = () => {
    if (offset >= 10) {
      setOffset((prev) => prev - 10);
    }
  };

  const handleNextPage = () => {
    if (links.length >= 10) {
      setOffset((prev) => prev + 10);
    }
  };

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>link</th>
            <th>short link</th>
            <th>counter</th>
          </tr>
        </thead>
        <tbody>
          {links.map((item) => (
            <Row
              originalLink={item.target}
              shortLink={`http://79.143.31.216/s/${item.short}`}
              counter={item.counter}
              key={item.id}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        disablePrevBtn={offset < limit}
        disableNextBtn={links.length < limit}
      />
    </>
  );
}

export default Table;
