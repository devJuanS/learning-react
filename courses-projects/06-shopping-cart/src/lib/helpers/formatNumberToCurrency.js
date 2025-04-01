/**
 *
 * @param {Number | String} value
 * @return {String}
 */
export function formatNumberToCurrency(value) {
  return Number(value).toLocaleString('en');
}
