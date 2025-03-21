import './App.css';
import { Movies } from './components/Movies/Movies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';

function App() {
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(' ')) return;
    updateSearch(newSearch);
  };

  return (
    <div className='movie-search-app'>
      <header>
        <h3>Movie Search React App</h3>
        <form onSubmit={handleSubmit} className='movie-search__form'>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
            onChange={handleChange}
            value={search}
            name='search'
            type='text'
            placeholder='God is not Dead!, The Lord of the Rings ...'
          />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </header>
      <main className='movie-search__result'>
        {loading ? <p>Loading movies...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
