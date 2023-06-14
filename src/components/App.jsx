import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Link
import Layout from './Layout/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

// import { lazy } from 'react';

// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MoviesDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
