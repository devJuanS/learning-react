# Movie Search with React

**Goal**: Create an application to search movies and show its information in a grid.

**Requirements**:

- Show an `input` to search movies and a `button` to perform the search.
- List the found movies with its title, year, and poster.
- Show the movies in a responsive grid.

**First iteration**:

- Avoid to perform the same search twice in a row.
- Make the search automatically while typing.
- Avoid to perform continously the search while typing (debounce).

**Resources**:

- API: https://www.omdbapi.com
- API key: get it from https://www.omdbapi.com/apikey.aspx

## Solution to First Iteration Requirements

- Avoid to perform the same search twice in a row.
  Using the hooks `useRef` to save the previous search and compare it with the new submitted search.

  ```js
  export function useMovies({ search }) {
    const previousSearch = useRef(search);

    const getMovies = async () => {
      ...
      previousSearch.current = search;
    }
    ...
  }
  ```
