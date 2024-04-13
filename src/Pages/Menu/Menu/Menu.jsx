import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import img from '../../../assets/backgroundimage/back8.jpeg'
import PopularMenu from '../../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>TCG | Menu</title>
            </Helmet>
            <Cover img={img} title={"OUR MENU"}
                details={"Would you like to try a dish?"}
            ></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={img} title={"OUR MENU"}
                details={"Would you like to try a dish?"}
            ></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={img} title={"OUR MENU"}
                details={"Would you like to try a dish?"}
            ></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;