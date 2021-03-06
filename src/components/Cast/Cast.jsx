import { useLocation, useParams } from 'react-router-dom';
import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';

import { CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [filmCasts] = useFetchMovieDetails([], movieId, 'credits');

  console.log('location on Cast: ', location);
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
