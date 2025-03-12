import './App.css';
import { Movies } from './components/Movies/Movies';
import { mapperMovieToApp } from './mapper/mapperMovieToLocal';
import responseMovies from './mocks/response-movies.json';
// import responseMovies from './mocks/no-movie-found.json';

function App() {
  const hasMovies = responseMovies.Response === 'True';

  const movies = hasMovies
    ? responseMovies.Search.map((movie) => mapperMovieToApp(movie))
    : null;

  return (
    <div className='movie-search__page'>
      <header>
        <h3>Movie Search React App</h3>
        <form className='movie-search__form'>
          <input
            type='text'
            placeholder='God is not Dead!, The Lord of the Rings ...'
          />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        {hasMovies ? (
          <Movies movies={movies} />
        ) : (
          <span>No result to show</span>
        )}
      </main>
    </div>
  );
}

export default App;
