function MovieCard({ movie }) {
  return (
    <li key={movie.id}>
      <img src={movie.poster} alt={`Poster of ${movie.title} movie`} />
      <h5>
        {movie.title} |<small> {movie.year}</small>
      </h5>
    </li>
  );
}

export function Movies({ movies }) {
  return (
    <ul className='movie-search__grid'>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}
