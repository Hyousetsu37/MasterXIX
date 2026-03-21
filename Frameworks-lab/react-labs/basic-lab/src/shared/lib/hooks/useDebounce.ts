import { useEffect, useState } from 'react';

export const useDebounce = <T>(term: T, delay: number): T => {
  const [debouncedTerm, setDebouncedTerm] = useState<T>(term);
  useEffect(() => {
    const delayFunc = setTimeout(() => {
      setDebouncedTerm(term);
    }, delay);

    return () => {
      clearTimeout(delayFunc);
    };
  }, [term, delay]);

  return debouncedTerm;
};
