import { useCallback, useMemo, useRef, useState } from 'react';
import { searchMovies } from '../services/movies';
// import withResults from '../mocks/response-movies.json';
// import withoutResults from '../mocks/no-movie-found.json';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search); // Avoid refetching the same search

  const getMovies = useCallback(async ({ search }) => {
    if (previousSearch.current === search) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading, errorMovies: error };
}
