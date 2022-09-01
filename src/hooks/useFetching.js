import { useState } from 'react';

const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      setError(e.message);
      setTimeout(() => setError(''), 3000);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};

export default useFetching;
