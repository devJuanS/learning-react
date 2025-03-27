import './App.css';
import { useCallback, useState } from 'react';
import { Movies } from './components/Movies/Movies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 500),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => setSort(!sort);

  const handleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(' ')) return;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
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
          {!loading && (
            <span>
              Sort by: Title{' '}
              <input type='checkbox' onChange={handleSort} checked={sort} />
            </span>
          )}
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
