import { WINNER_COMBOS } from '../constants.js';

/**
 * 
 * @param {Array} boardToCheck 
 * @param {Number} index 
 * @returns {String | null} winner or null
 */
export const checkWinnerFrom = (boardToCheck, index) => {
  const combosToValidate = WINNER_COMBOS.filter(combo => combo.some(value => value === index));
  
  for( const combo of combosToValidate ) {
    const [posX, posY, posZ] = combo;

    if( 
      boardToCheck[index] === boardToCheck[posX] && 
      boardToCheck[index] === boardToCheck[posY] && 
      boardToCheck[index] === boardToCheck[posZ] 
    ) {
      return boardToCheck[index];
    }
  }
  return null;
}

/**
 * 
 * @param {Array} boardToCheck 
 * @returns {Boolean}
 */
export const checkEndGame = (boardToCheck) => !boardToCheck.some( cell => cell === null );
