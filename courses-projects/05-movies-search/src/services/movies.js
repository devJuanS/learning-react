import { mapperMovieToApp } from '../mapper/mapperMovieToApp';

const API_KEY = '5500a140';

/**
 *
 * @param {String} search words to search
 * @returns {Array<Object>} movies found
 */
export const searchMovies = async ({ search }) => {
  if (search === '') return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
    );
    const json = await response.json();

    const hasMovies = json.Response === 'True';

    const movies = hasMovies
      ? json.Search.map((movie) => mapperMovieToApp(movie))
      : null;

    return movies;
  } catch (error) {
    console.log(`Error in searchMovies service: ${error.message}`);
    throw new Error('Error searching movies');
  }
};
