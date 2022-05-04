import { Link, NavLink, Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../services/api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  console.log(`location`, location);
  const [film, setFilm] = useState(null);
  const [backLinkURL, setBackLinkURL] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => {
      console.log(res);
      console.log('movieId:', movieId);
      setFilm(res);
    });
  }, [movieId]);

  useEffect(() => {
    if (backLinkURL) {
      return;
    }
    if (!film) {
      return;
    }
    setBackLinkURL(location?.state?.from ?? `/movies?query=${film.title}`);
  }, [backLinkURL, film, location?.state?.from]);
  return (
    <>
      {film && (
        <>
          <div>'full card film'</div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt="poster"
            width={200}
          />
          <span>Rating : {film.vote_average}</span>
          <Link to={`${backLinkURL}`}>Go back</Link>
          <p>{film.title}</p>
          <div>
            <p>Overviev:</p>
            <p>{film.overview}</p>
          </div>
          <div>
            <p>Genres:</p>
            <p>{film.genres.map(e => e.name)}</p>
          </div>
          <div>
            <p>More information</p>
            <NavLink to="cast" state={{ from: location.pathname }}>
              Casts
            </NavLink>
            <NavLink to="reviews" state={{ from: location.pathname }}>
              Reviews
            </NavLink>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
