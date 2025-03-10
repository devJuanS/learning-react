import { useEffect, useState } from 'react';
import { getThreeFirstWords } from '../logic/text';
import { getRandomImageUrl } from '../services/image';

/**
 *
 * @param {String} fact
 * @returns {String} Stateful value
 */
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const firstThreeWordFact = getThreeFirstWords(fact) + '...';

    getRandomImageUrl(firstThreeWordFact).then((newImageUrl) =>
      setImageUrl(newImageUrl)
    );
  }, [fact]);

  return { imageUrl };
}
