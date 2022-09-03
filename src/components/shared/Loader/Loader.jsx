import React from 'react';
import style from './Loader.module.css';

function Loader() {
  return (
    <div className={style.component}>
      <div className={style.loader}>
        {/* eslint-disable-next-line react/self-closing-comp */}
        <div></div>
        {/* eslint-disable-next-line react/self-closing-comp */}
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
