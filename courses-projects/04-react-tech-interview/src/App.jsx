import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from './hooks/useCatImage';
import { sliceTextFact } from './logic/text';

import './App.css';

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const factSliced = sliceTextFact(fact);

  const handleButtonCLick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h3>Cat Fact Image | React app</h3>
      {imageUrl && (
        <img
          alt={`Cat image with the words extracted from "${fact}"`}
          src={imageUrl}
        />
      )}
      {fact && <p>...{factSliced}</p>}
      <button onClick={handleButtonCLick}>Get new fact</button>
    </main>
  );
}
