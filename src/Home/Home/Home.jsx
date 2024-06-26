import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Cart from "../Card/Cart";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
              <Helmet>
                <title>TCG | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Cart></Cart>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;