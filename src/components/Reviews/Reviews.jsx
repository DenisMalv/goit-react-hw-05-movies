import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [filmCasts, setFilmCasts] = useState([]);
  useEffect(() => {
    fetchMovieDetails(movieId, 'reviews').then(({ results }) => {
      console.log(results);
      setFilmCasts(results);
    });
  }, [movieId]);
  console.log(movieId);

  return (
    <>
      {filmCasts.length > 0 ? (
        filmCasts.map(({ author, content, id }) => {
          return (
            <>
              <ul>
                <li key={id}>
                  <p>{author}</p>
                  <p>{content}</p>
                </li>
              </ul>
            </>
          );
        })
      ) : (
        <p>No reviews! :(</p>
      )}
    </>
  );
};
