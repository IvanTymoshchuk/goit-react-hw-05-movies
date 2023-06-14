import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../service/fetchAPI';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Title from '../components/Title/Title';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const moviesName = searchParams.get('query') ?? '';

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };

  useEffect(() => {
    if (!moviesName) return;

    setLoading(true);
    fetchSearchMovies(moviesName)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [moviesName]);

  return (
    <>
       <Title title="Search for your movie 😎" />
      {error && <h2>{error.message}</h2>}
      <SearchForm value={moviesName} onSearch={handleOnSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loading && <Loader />}
    </>
  );
};

export default Movies;
