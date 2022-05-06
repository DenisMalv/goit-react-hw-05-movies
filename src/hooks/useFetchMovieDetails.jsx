import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'services/api';

export const useFetchMovieDetails = (initialValue, movieId, type) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    fetchMovieDetails(movieId, type).then(data => {
      console.log(data);
      type === 'credits' ? setValue(data.cast) : setValue(data.results);
    });
  }, [movieId, type]);
  return [value];
};
