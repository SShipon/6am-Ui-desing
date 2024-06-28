import React, { useState, useEffect } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://6valley.6amtech.com/api/v1/products/top-rated?guest_id=1&limit=10&offset=1'
        );
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
    <div className="bg-gray-200 pt-5 pb-5">
      <h1 className=" text-center text-2xl font-bold my-4">
        Top Rated Products
      </h1>
      <div>
        <div className="flex flex-wrap gap-4 justify-center">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;