import { useEffect, useRef, useState } from 'react';

export function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Not validate during the first render
    if (isFirstRender.current) {
      isFirstRender.current = search === '';
      return;
    }
    if (search === '') {
      setError('Empty value is not allowed to search');
      return;
    }
    if (search.length < 3) {
      setError('Enter a query with at least three characters');
      return;
    }
    if (search.match(/^\d+$/)) {
      setError('Query with only numbers can not be searched.');
      return;
    }
    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
67;
