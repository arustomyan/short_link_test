import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Dashboard.module.css';
import Table from '../../components/Table/Table';
import MakeShortLink from '../../components/MakeShortLink/MakeShortLink';

function Dashboard() {
  return (
    <>
      <Header />
      <div className={styles.root}>
        <MakeShortLink />
        <Table />
      </div>
    </>
  );
}

export default Dashboard;
