import { useEffect, useState } from 'react';
import { getRandomFact } from '../services/facts';

/**
 *
 * @returns Stateful value, and function to update it
 */
export function useCatFact() {
  const [fact, setFact] = useState('initial fact before fetching');

  function refreshFact() {
    getRandomFact().then((newFact) => setFact(newFact));
  }

  // fetch a random cat fact
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
