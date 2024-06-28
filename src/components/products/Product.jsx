
import StarRating from './StarRating';
const Product = ({ product }) => {
  const {
    name,
    unit_price,
    discount,
    images,
    rating,
    purchase_price,
  } = product;
  const averageRating = rating.length > 0 ? rating[0].average : 'No rating';

  return (
    <div className="bg-white w-[350px] relative pt-[5px]">
      <img
        className="w-[340px] h-[300px] mx-auto rounded-[10px]"
        src={`https://6valley.6amtech.com/storage/app/public/product/${images[0]}`}
        alt="Product Image"
      />
      <div className="w-[340px] flex flex-col justify-center items-center p-[10px] text-center">
        <div>
          <StarRating rating={averageRating} />
        </div>
        <h1 className="font-medium">{name}</h1>
        <div className="absolute top-3 left-3 bg-red-500 text-white rounded-[15px] px-3 py-1">
          <h2>{discount}%</h2>
        </div>
        <div className="flex gap-[10px] items-center">
          <h3 className="text-gray-500 font-medium line-through">
            ${unit_price}
          </h3>
          <h4 className="font-semibold text-xl">${purchase_price}</h4>
          {/* <h4>${purchase_price.toFixed(2)}</h4> */}
        </div>
      </div>
    </div>
  );
};

export default Product;