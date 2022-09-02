import React from 'react';
import Button from '../shared/Button/Button';
import styles from './Pagination.module.css';

function Pagination({
  handlePrevPage,
  handleNextPage,
  disablePrevBtn,
  disableNextBtn,
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
        type="button"
        onClick={handlePrevPage}
        className={styles.button}
        disabled={disablePrevBtn}
      >
        <svg
          width="19"
          height="12"
          viewBox="0 0 19 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.89256 0L7.07107 1.17851L3.18198 5.06759H18.0312V6.71751H3.18198L7.07107 10.6066L5.89256 11.7852L0 5.89256L5.89256 0Z"
            fill="#111517"
          />
        </svg>
      </Button>
      <Button
        type="button"
        onClick={handleNextPage}
        className={styles.button}
        disabled={disableNextBtn}
      >
        <svg
          width="19"
          height="12"
          viewBox="0 0 19 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1386 11.7852L10.9601 10.6066L14.8492 6.71756L4.43023e-07 6.71756L5.87264e-07 5.06764L14.8492 5.06764L10.9601 1.1786L12.1386 4.3853e-07L18.0312 5.8926L12.1386 11.7852Z"
            fill="#111517"
          />
        </svg>
      </Button>
    </div>
  );
}

export default Pagination;
