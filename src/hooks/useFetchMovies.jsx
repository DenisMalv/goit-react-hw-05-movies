import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchMovie } from 'services/api';

export const useFetchMovies = (
  initialValue,
  setResponseFilm,
  setInputValue
) => {
  const [searchQuery, setSearchQuery] = useSearchParams(initialValue);
  const queryGet = searchQuery.get('query');
  useEffect(() => {
    if (!queryGet) {
      return;
    }
    fetchMovie(queryGet).then(({ results }) => {
      setResponseFilm(results);
      setInputValue(queryGet);
    });
  }, [queryGet, setInputValue, setResponseFilm]);
  return [searchQuery, setSearchQuery];
};
