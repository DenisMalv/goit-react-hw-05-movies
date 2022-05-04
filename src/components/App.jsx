import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import Layout from './Layout/Layout';
// import HomePage from './HomePage/HomePage';
// import MoviesPage from './MoviesPage/MoviesPage';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import Page404 from './Page404/Page404';

const Layout = lazy(() =>
  import('./Layout/Layout.jsx' /* webpackChunkName: Layout */)
);
const HomePage = lazy(() =>
  import('./HomePage/HomePage.jsx' /* webpackChunkName: HomePage */)
);
const MoviesPage = lazy(() =>
  import('./MoviesPage/MoviesPage.jsx' /* webpackChunkName: MoviesPage */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: MovieDetailsPage */
  )
);
const Cast = lazy(() => import('./Cast/Cast.jsx' /* webpackChunkName: Cast */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews.jsx' /* webpackChunkName: Reviews */)
);
const Page404 = lazy(() =>
  import('./Page404/Page404.jsx' /* webpackChunkName: Page404 */)
);
const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
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
