export const retriveBoardFromStorage = () => {
  const boardFromStorage = window.localStorage.getItem('board');
    if( boardFromStorage && boardFromStorage !== 'undefined') return JSON.parse(boardFromStorage);
    return null;
}

export const retriveTurnFromStorage = () => {
  const turnFromStorage = window.localStorage.getItem('turn');
      if( turnFromStorage && turnFromStorage !== 'undefined' ) return turnFromStorage;
      return null;
}

export function saveGameToStorage ({ board, turn }) {
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', turn);
}

export function resetGameStorage () {
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
}