import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrandingMovies } from 'services/api';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrandingMovies().then(({ results }) => setMovies(results));
  }, []);
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
              <p>{movie.title}</p>
              <p>{movie.vote_average}</p>
            </Link>
          </li>
        ))}
        {/* <li>
          <Link to="/movies/movie.id">'element'</Link>
        </li> */}
      </ul>
    </>
  );
};
