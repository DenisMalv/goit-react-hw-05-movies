import { Routes, Route } from 'react-router-dom';
import { MainContainer } from './App.styled';

import { Layout } from './Layout/Layout';
import { HomePage } from './HomePage/HomePage';
import { MoviesPage } from './MoviesPage/MoviesPage';
import { MovieDetailsPage } from './MovieDetailsPage/MovieDetailsPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Page404 } from './Page404/Page404';

const App = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </MainContainer>
  );
};

export default App;
