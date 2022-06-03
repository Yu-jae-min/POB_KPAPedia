import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<string>(value);
  const [debounceComplete, setDebounceComplete] = useState<boolean>(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebounceValue(value);
      setDebounceComplete(true);
    }, delay);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [value, delay]);

  return debounceComplete ? debounceValue : '';
};

export default useDebounce;
