import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Products } from './components/Products';
import initialProducts from './mocks/products.json';

// const API_URI = 'https://fakestoreapi.com/products';

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
