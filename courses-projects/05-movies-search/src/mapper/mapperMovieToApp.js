/**
 *
 * @param {Object} movie
 * @returns {Object}
 */
export const mapperMovieToApp = (movie) => {
  return {
    id: movie.imdbID,
    poster: movie.Poster,
    title: movie.Title,
    year: movie.Year,
  };
};
