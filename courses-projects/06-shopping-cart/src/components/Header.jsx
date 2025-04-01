import { useState } from 'react';
import { formatNumberToCurrency } from '../lib/helpers/formatNumberToCurrency';
import './Header.css';

// TODO: fetch the categories from API
const PRODUCTS_CATEGORIES = [
  'all',
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
];

function Filters({ onChangeFilters }) {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChangeFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChangeFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className='filters'>
      <div className='filter__min-price'>
        <label htmlFor='minPrice'>Price from:</label>
        <input
          type='range'
          id='minPrice'
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
        />
        <span>${formatNumberToCurrency(minPrice)}</span>
      </div>
      <div className='filter__category'>
        <label>Category</label>
        <select id='filterCategory' onChange={handleChangeCategory}>
          {PRODUCTS_CATEGORIES.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}

export function Header({ changeFilters }) {
  return (
    <header>
      <h1>Shopping Cart 🛒</h1>
      <Filters onChangeFilters={changeFilters} />
    </header>
  );
}
