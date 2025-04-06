import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import './Cart.css';
import { formatNumberToCurrency } from '../lib/helpers/formatNumberToCurrency';
import { useCart } from '../hooks/useCart';

function CartItem({ product }) {
  const { addToCart } = useCart();

  const handleButtonClick = () => {
    addToCart(product);
  };

  return (
    <>
      <img src={product.image} alt={product.title} />
      <section className='item-info-grid'>
        <p className='item-info__title'>{product.title}</p>
        <div className='item-info__price'>
          <span>${formatNumberToCurrency(product.price)}</span>
        </div>
        <div className='item-info__btn-quantity'>
          <small>Qty: {product.quantity}</small>
          <button onClick={handleButtonClick}>+</button>
        </div>
      </section>
    </>
  );
}

export function Cart() {
  const { cart, clearCart } = useCart();
  const cartCheckboxId = useId();

  return (
    <>
      {/* The label and input show a button running as checkbox when pressed show/hide the cart that is in the aside element */}
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <CartItem product={product} />
              </li>
            );
          })}
        </ul>
        {cart.length ? (
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        ) : (
          <span>Cart is empty</span>
        )}
      </aside>
    </>
  );
}
