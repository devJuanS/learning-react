import './Products.css';
import { AddToCartIcon } from './Icons';
import { formatNumberToCurrency } from '../lib/helpers/formatNumberToCurrency';

export function Products({ products }) {
  return (
    <main className='products'>
      <h2>Catalog of products</h2>
      <ul className='products-grid'>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img
                className='product-thumbnail'
                src={product.image}
                alt={product.title}
              />
              <section className='product-info-grid'>
                <p className='product-info__title'>{product.title}</p>
                <div className='product-info__price'>
                  <span>${formatNumberToCurrency(product.price)}</span>
                </div>
                <div className='product-info__button'>
                  <button>
                    <AddToCartIcon />
                  </button>
                </div>
              </section>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
