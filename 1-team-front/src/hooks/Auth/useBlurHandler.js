import { useState } from 'react';

const useBlurHandler = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const blurHandler = (event) => {
    setInputValue(event.target.value);
  };

  return [inputValue, blurHandler];
};

export default useBlurHandler;
