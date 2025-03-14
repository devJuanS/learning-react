import { mapperMovieToApp } from '../mapper/mapperMovieToApp';
import responseMovies from '../mocks/response-movies.json';
// import responseMovies from '../mocks/no-movie-found.json';

export function useMovies() {
  const hasMovies = responseMovies.Response === 'True';

  const movies = hasMovies
    ? responseMovies.Search.map((movie) => mapperMovieToApp(movie))
    : null;
  return { movies };
}
