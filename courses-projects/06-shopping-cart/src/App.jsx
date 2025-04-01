import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Products } from './components/Products';
import initialProducts from './mocks/products.json';
import { useFilters } from './hooks/useFilters';

// const API_URI = 'https://fakestoreapi.com/products';

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
