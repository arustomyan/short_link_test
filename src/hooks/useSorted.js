import { useState } from 'react';
import generator from '../utils/generator';

const useSorted = (obj) => {
  const [state, setState] = useState('');
  const [prevHandle, setPrevHandle] = useState('');

  let isReset = false;

  const handleSorted = (e) => {
    if (prevHandle !== e.target.title) isReset = true;
    setState(generator(obj[e.target.title], isReset));
    isReset = false;
    setPrevHandle(e.target.title);
  };

  return [state, handleSorted];
};

export default useSorted;
