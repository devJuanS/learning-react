import initialProducts from './mocks/products.json';
import './App.css';

function App() {
  console.log(initialProducts);
  return (
    <>
      <header>
        <strong>Shopping Cart 🛒</strong>
      </header>
      <main>
        <h2>Catalog of products</h2>
        <ul className='products-grid'>
          {initialProducts.map((product) => {
            return (
              <li key={product.id}>
                <img
                  className='product-thumbnail'
                  src={product.image}
                  alt={product.title}
                />
                <p className='product-title'>{product.title}</p>
                <span>${product.price}</span>
              </li>
            );
          })}
        </ul>
      </main>
      <footer>devJuanS</footer>
    </>
  );
}

export default App;
