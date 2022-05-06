import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'services/api';

export const useFetchMovieCard = (initialValue, movieId) => {
  const [filmCard, setFilmCard] = useState(initialValue);

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => {
      setFilmCard(data);
    });
  }, [movieId]);
  return [filmCard, setFilmCard];
};
