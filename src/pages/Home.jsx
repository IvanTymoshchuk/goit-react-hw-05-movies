import { useState, useEffect } from 'react';
import { fetchTrending } from '../service/fetchAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchTrending()
      .then(res => {
        setMovies(res.results);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <>
      <h1> Trending today</h1>
      <MoviesList movies={movies} />
      {loader && <Loader />}
    </>
  );
};

export default Home;
