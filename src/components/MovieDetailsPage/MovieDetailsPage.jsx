import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../services/api';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    fetchMovieDetails(movieId).then(res => {
      console.log(res);
      setFilm(res);
    });
  }, [movieId]);
  return (
    <>
      {film && (
        <>
          <div>'full card film'</div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt="poster"
          />
          <span>Rating : {film.vote_average}</span>
          <p>{film.title}</p>
          <div>
            <p>Overviev:</p>
            <p>{film.overview}</p>
          </div>
          <div>
            <p>Genres:</p>
            <p>{film.genres.map(e => e.name)}</p>
          </div>
          {/* <div>MOVIE ID = {film.id}</div> */}
          <div>
            <p>More information</p>
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};
