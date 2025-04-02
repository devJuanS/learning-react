import { useId } from 'react';
import { CartIcon } from './Icons';
import './Cart.css';
import { formatNumberToCurrency } from '../lib/helpers/formatNumberToCurrency';

function CartItem({ image, price, quantity, title }) {
  return (
    <>
      <img src={image} alt={title} />
      <section className='item-info-grid'>
        <p className='item-info__title'>{title}</p>
        <div className='item-info__price'>
          <span>${formatNumberToCurrency(price)}</span>
        </div>
        <div className='item-info__btn-quantity'>
          <small>Qty: {quantity}</small>
          <button>+</button>
        </div>
      </section>
    </>
  );
}

export function Cart() {
  const cartCheckboxId = useId();

  const mockCart = [
    {
      id: 13,
      image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
      price: 599,
      quantity: 1,
      title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    },
    {
      id: 8,
      image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
      price: 10.99,
      quantity: 1,
      title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    },
  ];

  return (
    <>
      {/* The label and input show a button running as checkbox when pressed show/hide the cart that is in the aside element */}
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {mockCart.map((product) => {
            return (
              <li key={product.id}>
                <CartItem {...product} />
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
