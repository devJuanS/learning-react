import { useId } from 'react';
import { formatNumberToCurrency } from '../lib/helpers/formatNumberToCurrency';
import './Header.css';
import { useFilters } from '../hooks/useFilters';

// TODO: fetch the categories from API
const PRODUCTS_CATEGORIES = [
  'all',
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
];

function Filters() {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className='filters'>
      <div className='filter__min-price'>
        <label htmlFor={minPriceFilterId}>Price from:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${formatNumberToCurrency(filters.minPrice)}</span>
      </div>
      <div className='filter__category'>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          id={categoryFilterId}
          value={filters.category}
          onChange={handleChangeCategory}
        >
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

export function Header() {
  return (
    <header>
      <h1>Shopping Cart 🛒</h1>
      <Filters />
    </header>
  );
}
