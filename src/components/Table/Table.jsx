import React, { useEffect, useState } from 'react';
import Row from './Row';
import useFetching from '../../hooks/useFetching';
import ShortLinkApi from '../../services/shortLinkService';
import Pagination from '../Pagination/Pagination';
import styles from './Table.module.css';
import useSorted from '../../hooks/useSorted';
import ArrowSort from '../shared/ArrowSort/ArrowSort';
import Loader from '../shared/Loader/Loader';

const sortInit = {
  link: ['', 'asc_target', 'desc_target'],
  short: ['', 'asc_short', 'desc_short'],
  counter: ['', 'asc_counter', 'desc_counter'],
};

function Table() {
  const [links, setLinks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(10);

  const [sort, handleSort] = useSorted(sortInit);

  const [fetchLinks, isLoading] = useFetching(async (token, index, lim) => {
    const response = await ShortLinkApi.statistics(token, index, lim, sort);
    setLinks(response);
  });

  useEffect(() => {
    const token = JSON.stringify(sessionStorage.getItem('token'));
    fetchLinks(token, offset, limit);
  }, [offset, limit, sort]);

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

  const handleSortAndResetOffset = (e) => {
    setOffset(0);
    handleSort(e);
  };

  if (isLoading && links.length === 0) return <Loader />;

  return (
    <>
      <table
        className={[styles.table, isLoading ? styles.loading : ''].join(' ')}
      >
        <thead>
          <tr>
            <th title="link" onClick={(e) => handleSortAndResetOffset(e)}>
              link
              <ArrowSort
                asc={sort === 'asc_target'}
                desc={sort === 'desc_target'}
              />
            </th>
            <th title="short" onClick={(e) => handleSortAndResetOffset(e)}>
              short link
              <ArrowSort
                asc={sort === 'asc_short'}
                desc={sort === 'desc_short'}
              />
            </th>
            <th title="counter" onClick={(e) => handleSortAndResetOffset(e)}>
              counter
              <ArrowSort
                asc={sort === 'asc_counter'}
                desc={sort === 'desc_counter'}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {links.map((item) => (
            <Row
              originalLink={item.target}
              shortLink={`http://79.143.31.216/s/${item.short}`}
              counter={item.counter}
              key={item.id}
              className={isLoading ? styles.loading : ''}
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
