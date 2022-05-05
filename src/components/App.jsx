import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
// import HomePage from './HomePage/HomePage';
// import MoviesPage from './MoviesPage/MoviesPage';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import Page404 from './Page404/Page404';

// const Layout = lazy(() => import('./Layout/Layout.jsx'));
const HomePage = lazy(() => import('./HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage.jsx')
);
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));
const Page404 = lazy(() => import('./Page404/Page404.jsx'));
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
