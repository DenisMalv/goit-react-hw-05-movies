import { useState, useEffect } from 'react';
import { fetchTrandingMovies } from 'services/api';

export const useMovies = initialValue => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    fetchTrandingMovies().then(({ results }) => setValue(results));
  }, []);
  return [value];
};
