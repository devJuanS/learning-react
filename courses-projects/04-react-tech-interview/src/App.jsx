import { useEffect, useState } from 'react';
import './App.css';

const CAT_FACT_URL = 'https://catfact.ninja/fact';
const CAT_IMAGE_BASE_URL = 'https://cataas.com/cat/says/';

export function App() {
  const [fact, setFact] = useState('initial fact before fetching');
  const [imageUrl, setImageUrl] = useState();

  // fetch a random cat fact
  useEffect(() => {
    fetch(CAT_FACT_URL)
      .then((response) => {
        if (!response.ok) throw new Error('Error fetching fact.');
        return response.json();
      })
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  // fetch url from a random cat with the first three words from the fact
  useEffect(() => {
    if (!fact) return;

    const firstThreeWordFact = getThreeFirstWords(fact) + '...';

    fetch(`${CAT_IMAGE_BASE_URL + firstThreeWordFact}?json=true`)
      .then((response) => {
        if (!response.ok) throw new Error('Error fetching image url.');
        return response.json();
      })
      .then((response) => setImageUrl(response.url));
  }, [fact]);

  /**
   *
   * @param {String} text
   * @returns {String}
   */
  const getThreeFirstWords = (text) => text.split(' ', 3).join(' ');

  /**
   *
   * @param {String} text
   * @returns {String}
   */
  const sliceTextFact = (text) => {
    const firstWordsLength = getThreeFirstWords(text).length;
    return text.slice(firstWordsLength);
  };

  const factSliced = sliceTextFact(fact);

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
    </main>
  );
}
