import { useEffect, useState } from 'react';
import { getRandomFact } from './services/facts';
import { getThreeFirstWords, sliceTextFact } from './logic/text';
import { getRandomImageUrl } from './services/image';

import './App.css';

export function App() {
  const [fact, setFact] = useState('initial fact before fetching');
  const [imageUrl, setImageUrl] = useState();

  // fetch a random cat fact
  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  // fetch url from a random cat with the first three words from the fact
  useEffect(() => {
    const firstThreeWordFact = getThreeFirstWords(fact) + '...';

    getRandomImageUrl(firstThreeWordFact).then((newImageUrl) =>
      setImageUrl(newImageUrl)
    );
  }, [fact]);

  const factSliced = sliceTextFact(fact);

  const handleButtonCLick = () =>
    getRandomFact().then((newFact) => setFact(newFact));

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
