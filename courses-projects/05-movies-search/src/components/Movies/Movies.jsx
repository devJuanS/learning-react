import './Movies.css';

function MovieCard({ movie }) {
  return (
    <article>
      <img
        className='movie__poster'
        src={movie.poster}
        alt={`Poster of ${movie.title} movie`}
      />
      <h5 className='movie__title'>{movie.title}</h5>
      <span className='movie__year'> {movie.year}</span>
    </article>
  );
}

function NoMovies() {
  return <span>No movies to show</span>;
}

export function Movies({ movies }) {
  if (movies === null) {
    return <NoMovies />;
  }
  return (
    <ul className='movie-search__grid'>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        );
      })}
    </ul>
  );
}
