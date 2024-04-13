import { Helmet } from 'react-helmet-async';
import img from '../../../assets/backgroundimage/back8.jpeg'
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import Cover from '../../../Shared/Cover/Cover';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import singleimg from '../../../assets/backgroundimage/back.jpg'
import bagImg from '../../../assets/backgroundimage/bagback.jpg'

const Menu = () => {
    const [category] = useMenu();
    const single_chocolate = category.filter(item => item.category === 'Chocolate List')
    const gift_bag = category.filter(item => item.category === 'Gift Bag')
    return (
        <div>
            <Helmet>
                <title>TCG | Menu</title>
            </Helmet>
            <Cover img={img} title={"OUR Collection"}
                details={"Would you like to try a chocolate?"}
            ></Cover>
            <SectionTitle
                heading={"Today's offer"}
                subheading={"Don't miss"}
            ></SectionTitle>
            {/* offered package */}
            <MenuCategory coverImg={img} items={gift_bag}></MenuCategory>
            {/* single chocolate list */}
            <MenuCategory coverImg={singleimg} title={"Chocolate List"} items={single_chocolate}></MenuCategory>
            {/* gift bag */}
            <MenuCategory coverImg={bagImg} title={"Gift bag"} items={gift_bag}></MenuCategory>
        </div>
    );
};

export default Menu;