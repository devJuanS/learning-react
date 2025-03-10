/**
 *
 * @param {String} text
 * @returns {String}
 */
export const getThreeFirstWords = (text) => text.split(' ', 3).join(' ');

/**
 *
 * @param {String} text
 * @returns {String}
 */
export const sliceTextFact = (text) => {
  const firstWordsLength = getThreeFirstWords(text).length;
  return text.slice(firstWordsLength);
};
