import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Products } from './components/Products';
import initialProducts from './mocks/products.json';

// const API_URI = 'https://fakestoreapi.com/products';

function App() {
  return (
    <>
      <Header />
      <Products products={initialProducts} />
      <Footer />
    </>
  );
}

export default App;
