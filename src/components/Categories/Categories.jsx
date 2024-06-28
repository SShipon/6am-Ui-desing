import React, { useState, useEffect } from 'react';
import Category from './Category';


const Categories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://6valley.6amtech.com/api/v1/products/top-rated?guest_id=1&limit=10&&offset=1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products); // Assuming the API response structure
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Top Rated Products{products.length}</h1>
      <div className='grid grid-cols-5'>
          {
            products.map(product =><Category
            key={product}
              product={product}
            ></Category>)
          }
      </div>
    </div>
  );
};

export default Categories;
