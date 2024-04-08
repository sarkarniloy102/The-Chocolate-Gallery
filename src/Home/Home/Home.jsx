import Banner from "../Banner/Banner";
import Cart from "../Card/Cart";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Cart></Cart>
           <Featured></Featured>
        </div>
    );
};

export default Home;