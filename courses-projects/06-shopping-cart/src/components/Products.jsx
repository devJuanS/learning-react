import './Products.css';

export function Products({ products }) {
  return (
    <main>
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
              <p className='product-title'>{product.title}</p>
              <span>${product.price}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
