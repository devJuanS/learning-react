import { createContext, useState } from 'react';

// 1. create the context
// eslint-disable-next-line react-refresh/only-export-components
export const FiltersContext = createContext();

// 2. Create the context provider
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
