import { useState } from "react";
import confetti from 'canvas-confetti';
import Square from './components/Square.jsx';
import WinnerModal from "./components/WinnerModal.jsx";
import { TURNS } from './constants.js';
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { resetGameStorage, retriveBoardFromStorage, retriveTurnFromStorage, saveGameToStorage } from "./logic/storage/index.js";

function App() {
  const [board, setBoard]   = useState( () => retriveBoardFromStorage() ?? Array(9).fill(null) );
  const [turn, setTurn]     = useState( () => retriveTurnFromStorage() ?? TURNS.X );
  const [winner, setWinner] = useState(null);

  const toggleTurn = (turn) => turn === TURNS.X ? TURNS.O : TURNS.X;

  /**
   * 
   * @param {Number} index position in the board
   */
  const updateBoard = ( index ) => {
    if( board[index] || winner ) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    
    const newTurn = toggleTurn(turn);
    setTurn(toggleTurn(turn));

    // persist the game in browser memory
    saveGameToStorage({ board: newBoard, turn: newTurn });
    
    const newWinner = checkWinnerFrom(newBoard, index);
    if( newWinner ) {
      confetti();
      setWinner(newWinner);
      setTurn(toggleTurn(newTurn));
    } else if( checkEndGame(newBoard) ) {
      setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={ resetGame }>Reset Game</button>
      <section className='game'>
        {
          board.map( (square, index) => {
              return (
                <Square
                  key         = { index }
                  index       = { index }
                  updateBoard = { updateBoard }
                  >
                  { square }
                </Square>
              )
            })
        }
      </section>
      <section className="turn">
        <Square isSelected={ turn === TURNS.X }>
          { TURNS.X }
        </Square>
        <Square isSelected={ turn === TURNS.O }>
          { TURNS.O }
        </Square>
      </section>
      <WinnerModal 
        winner    = { winner }
        resetGame = { resetGame }
      />
    </main>

  );
}

export default App;
