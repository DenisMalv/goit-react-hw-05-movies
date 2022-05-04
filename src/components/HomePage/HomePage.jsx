import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrandingMovies } from 'services/api';

import {
  HomePageList,
  Film,
  FilmLink,
  FilmDescriptionContainer,
  FilmRating,
  FilmTitle,
} from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrandingMovies().then(({ results }) => setMovies(results));
  }, []);
  return (
    <>
      <HomePageList>
        {movies.map(movie => (
          <Film key={movie.id}>
            <FilmLink
              to={`/movies/${movie.id}`}
              state={{ from: location.pathname }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width="100%"
              />
              <FilmDescriptionContainer>
                <FilmTitle>{movie.title}</FilmTitle>
                <FilmRating>{movie.vote_average}</FilmRating>
              </FilmDescriptionContainer>
            </FilmLink>
          </Film>
        ))}
      </HomePageList>
    </>
  );
};

export default HomePage;
