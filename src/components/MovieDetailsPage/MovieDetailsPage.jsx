import { Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../services/api';

import {
  DetailFilmCardMain,
  FilmPoster,
  FilmMainInfo,
  FilmInfoName,
  BackLink,
  MoreInformationFilmCard,
  MoreInformationButton,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [film, setFilm] = useState(null);
  const [backLinkURL, setBackLinkURL] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => {
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

  console.log('location on movieDetailsPage: ', location);
  return (
    <>
      {film && (
        <>
          <DetailFilmCardMain>
            <FilmPoster
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={film.title}
            />
            <div>
              <table style={{ padding: 10 }}>
                <FilmMainInfo>
                  <tr>
                    <FilmInfoName>Rating : </FilmInfoName>
                    <td>{film.vote_average}</td>
                  </tr>
                  <tr>
                    <FilmInfoName>Title : </FilmInfoName>
                    <td>{film.title}</td>
                  </tr>
                  <tr>
                    <FilmInfoName>Genres:</FilmInfoName>
                    <td>{film.genres.map(e => e.name + ', ')}</td>
                  </tr>
                  <tr>
                    <FilmInfoName>Overviev :</FilmInfoName>
                    <td>{film.overview}</td>
                  </tr>
                </FilmMainInfo>
              </table>
              <BackLink to={`${backLinkURL}`}>Go back</BackLink>
            </div>
          </DetailFilmCardMain>

          <MoreInformationFilmCard>
            <MoreInformationButton
              to="cast"
              state={{ from: `/movies?query=${film.title}` }}
            >
              Casts
            </MoreInformationButton>
            <MoreInformationButton
              to="reviews"
              state={{ from: `/movies?query=${film.title}` }}
            >
              Reviews
            </MoreInformationButton>
            <Outlet />
          </MoreInformationFilmCard>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
