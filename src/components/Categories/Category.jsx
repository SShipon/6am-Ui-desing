import React from "react";

const Category = ({ product }) => {
  const {
    name,
    discount,
    reviews_count,
    reviews_avg_rating,
    purchase_price,
    images,
    category,
  } = product;
  console.log(product);

  return (
    <div className="">
      <p>Product Name: {name}</p>
      <p>Category Name: {category?.name || "No category"}</p>
      <img
        src={`https://6valley.6amtech.com/storage/app/public/category/${category.icon}`}
        alt={category.name}
      />
      <p>Discount{discount}</p>
      <p>Reviews{reviews_count}</p>
      <p>{reviews_avg_rating}</p>
      <p>{purchase_price}</p>
    </div>
  );
};

export default Category;

//  {product.images.map((image, index) => (
//     <div key={index}>
//     <img src={`https://6valley.6amtech.com/storage/app/public/product/${image}`}/>
//   </div>
// ))}

// {/* <img
// src={`https://6valley.6amtech.com/storage/app/public/product/${images[0]}`}
// alt="Additional"
// style={{ maxHeight: '300px', objectFit: 'cover' }}
// /> */}
