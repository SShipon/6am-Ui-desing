import Categories from "../../components/Categories/Categories";
import Test from "../../components/Test";
import Products from "../../components/products/Products";



const Home = () => {
    return (
        <div>
            
            <Categories />
            <hr className="text-4xl" />
             <Test />
            <Products />
        </div>
    );
};

export default Home;