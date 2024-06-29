import Categories from "../../components/Categories/Categories";
import Test from "../../components/Test";
import Products from "../../components/products/Products";
import Tab from "../../components/tab/Tab";



const Home = () => {
    return (
        <div>
            
            <Categories />
            <hr className="text-4xl" />
            <Tab />
             <Test />
             
            <Products />
        </div>
    );
};

export default Home;