import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from 'GlobalStyles';

const Movies = lazy(() => import('page/Movies/Movies'));
const Home = lazy(() => import('page/Home/Home'));
const Layout = lazy(() => import('components/Layout/Layout'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
