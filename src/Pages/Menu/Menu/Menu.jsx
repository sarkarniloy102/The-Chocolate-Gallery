import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>TCG | Menu</title>
            </Helmet>
            <Cover img={img}></Cover>
        </div>
    );
};

export default Menu;