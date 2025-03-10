const CAT_IMAGE_BASE_URL = 'https://cataas.com/cat/says/';

/**
 * then version
 * @param {String} text
 * @returns {Promise<string>} Image URL based on the fact
 */
// export const getRandomImageUrl = (text) => {
//   if (!text) return;

//   return fetch(`${CAT_IMAGE_BASE_URL + text}?json=true`)
//     .then((response) => {
//       if (!response.ok) throw new Error('Error fetching image url.');
//       return response.json();
//     })
//     .then((response) => response.url);
// };

/**
 *  async version
 * @param {String} text
 * @returns {Promise<string>} Image URL based on the fact
 */
export const getRandomImageUrl = async (text) => {
  if (!text) return;

  const response = await fetch(`${CAT_IMAGE_BASE_URL + text}?json=true`);
  if (!response.ok) throw new Error('Error fetching image url.');
  const { url } = await response.json();
  return url;
};
