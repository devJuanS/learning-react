import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { formatNumberToCurrency } from '../lib/helpers/formatNumberToCurrency';
import { useCart } from '../hooks/useCart';

function ProductItem({ product }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const isProductInCart = cart.some((item) => item.id === product.id);

  const handleAddButtonClick = () => {
    addToCart(product);
  };

  const handleRemoveButtonClick = () => {
    removeFromCart(product);
  };

  return (
    <>
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
          <button onClick={handleAddButtonClick}>
            <AddToCartIcon />
          </button>
          {isProductInCart && (
            <button
              onClick={handleRemoveButtonClick}
              style={{ backgroundColor: 'red' }}
            >
              <RemoveFromCartIcon />
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export function Products({ products }) {
  return (
    <main className='products'>
      <h2>Catalog of products</h2>
      <ul className='products-grid'>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
