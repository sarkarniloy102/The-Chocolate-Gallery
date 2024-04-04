import Banner from "../Banner/Banner";
import Cart from "../Card/Cart";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Cart></Cart>
        </div>
    );
};

export default Home;