import { Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { useBackLink } from 'hooks/useBackLink';
import { useFetchMovieCard } from 'hooks/useFetchMovieCard';

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

  const [movieCard] = useFetchMovieCard(null, movieId);
  const [backLinkURL] = useBackLink(null, movieCard, location);

  return (
    <>
      {movieCard && (
        <>
          <DetailFilmCardMain>
            <FilmPoster
              src={`https://image.tmdb.org/t/p/w500/${movieCard.poster_path}`}
              alt={movieCard.title}
            />
            <div>
              <table style={{ padding: 10 }}>
                <FilmMainInfo>
                  <tr>
                    <FilmInfoName>Rating : </FilmInfoName>
                    <td>{movieCard.vote_average}</td>
                  </tr>
                  <tr>
                    <FilmInfoName>Title : </FilmInfoName>
                    <td>{movieCard.title}</td>
                  </tr>
                  <tr>
                    <FilmInfoName>Genres:</FilmInfoName>
                    <td>{movieCard.genres.map(e => e.name + ', ')}</td>
                  </tr>
                  <tr>
                    <FilmInfoName>Overviev :</FilmInfoName>
                    <td>{movieCard.overview}</td>
                  </tr>
                </FilmMainInfo>
              </table>
              <BackLink to={`${backLinkURL}`}>Go back</BackLink>
            </div>
          </DetailFilmCardMain>

          <MoreInformationFilmCard>
            <MoreInformationButton
              to="cast"
              state={{ from: `/movies?query=${movieCard.title}` }}
            >
              Casts
            </MoreInformationButton>
            <MoreInformationButton
              to="reviews"
              state={{ from: `/movies?query=${movieCard.title}` }}
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
