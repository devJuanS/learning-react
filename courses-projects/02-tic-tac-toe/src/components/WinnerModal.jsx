import Square from './Square.jsx';

function WinnerModal ({ winner, resetGame }) {
  if( winner === null ) return null;

  const modalTitle = winner === false ? 'The game ended in a draw' : `The winner is `;

  return (
    <section className="winner">
      <div className="text">
        <h2>{ modalTitle }</h2>
        <main className="win">
          {
            <Square>{ winner }</Square>
          }
        </main>
        <footer>
          <button onClick={ resetGame }>Play again</button>
        </footer>
      </div>
    </section>
  );
}

export default WinnerModal;