import { useState } from 'react';

const useInput = (init) => {
  const [state, setState] = useState(init);

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return [state, handleChange];
};

export default useInput;
