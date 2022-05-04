import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';

import { CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [filmCasts, setFilmCasts] = useState(null);
  useEffect(() => {
    fetchMovieDetails(movieId, 'credits').then(({ cast }) => {
      console.log(cast);
      setFilmCasts(cast);
    });
  }, [movieId]);
  console.log(movieId);
  return (
    <>
      {filmCasts && (
        <>
          <CastList>
            {filmCasts.map(actor => (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
                <p>character: {actor.character}</p>
                <p>name: {actor.name}</p>
              </li>
            ))}
          </CastList>
        </>
      )}
    </>
  );
};

export default Cast;
