const CAT_FACT_URL = 'https://catfact.ninja/fact';

/**
 *
 * @returns {Promise<String>} A random fact
 */
// export const getRandomFact = () => {
//   return fetch(CAT_FACT_URL)
//     .then((response) => {
//       if (!response.ok) throw new Error('Error fetching fact.');
//       return response.json();
//     })
//     .then((data) => {
//       const { fact } = data;
//       return fact;
//     });
// };

/**
 *
 * @returns {Promise<String>} A random fact
 */
export const getRandomFact = async () => {
  const response = await fetch(CAT_FACT_URL);
  if (!response.ok) throw new Error('Error fetching fact.');
  const data = await response.json();
  const { fact } = data;
  return fact;
};
