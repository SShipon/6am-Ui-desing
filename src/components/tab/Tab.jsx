import { useState } from "react";
import Categories from "../Categories/Categories";
import Products from "../products/Products";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="portfolio" className="container mx-auto p-4">
      <h3 className="text-3xl font-extrabold text-center my-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400">
        Recommended For You
      </h3>
      <div className="flex mb-4">
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 1 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(1)}
        >
          <span className="text-xs lg:text-lg">Featured Product</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 2 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(2)}
        >
          <span className="text-xs lg:text-lg">Top Rated</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 3 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(3)}
        >
          <span className="text-xs lg:text-lg">Best Selling</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 4 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(4)}
        >
          <span className="text-xs lg:text-lg">Latest Products</span>
        </button>
        <button
          className={`flex-1 p-4 text-center cursor-pointer ${
            toggleState === 5 ? "border-b-2 border-blue-500" : "border-b-2 border-transparent"
          }`}
          onClick={() => toggleTab(5)}
        >
          <span className="text-xs lg:text-lg">New Arrivals</span>
        </button>
      </div>

      <div className="flex-grow">
        <div className={`${toggleState === 1 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
           <Categories />
        </div>

        <div className={`${toggleState === 2 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut at amet aperiam nihil illo, magni suscipit, ea sequi minima ipsum impedit rem temporibus? Quidem dicta ipsum similique rem eum?</p>
        </div>

        <div className={`${toggleState === 3 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
         <Products />
        </div>

        <div className={`${toggleState === 4 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut at amet aperiam nihil illo, magni suscipit, ea sequi minima ipsum impedit rem temporibus? Quidem dicta ipsum similique rem eum?</p>
        </div>

        <div className={`${toggleState === 5 ? "block" : "hidden"} p-4 rounded-lg`}>
          <hr className="my-2" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut at amet aperiam nihil illo, magni suscipit, ea sequi minima ipsum impedit rem temporibus? Quidem dicta ipsum similique rem eum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut at amet aperiam nihil illo, magni suscipit, ea sequi minima ipsum impedit rem temporibus? Quidem dicta ipsum similique rem eum?</p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
