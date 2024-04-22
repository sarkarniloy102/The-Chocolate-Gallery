import { Helmet } from 'react-helmet-async';
import img from '../../../assets/backgroundimage/back8.jpeg'
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import Cover from '../../../Shared/Cover/Cover';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import singleimg from '../../../assets/backgroundimage/back.jpg'
import giftImg from '../../../assets/backgroundimage/bagback.jpg'
import chipsImg from '../../../assets/backgroundimage/chipsback.jpeg'
import topImg from '../../../assets/backgroundimage/back2.jpeg'
import customImg from '../../../assets/backgroundimage/custom.jpeg'

const Menu = () => {
    const [category] = useMenu();
    const single_chocolate = category.filter(item => item.category === 'Chocolate List')
    const gift_item = category.filter(item => item.category === 'Gift Bag')
    const custom_pack = category.filter(item => item.category === 'Customized Package')
    const combo_pack = category.filter(item => item.category === 'Combo Package')
    const Top_demand = category.filter(item => item.category === 'Top On Demand')
    const chips = category.filter(item => item.category === 'Chips')
    return (
        <div>
            <Helmet>
                <title>TCG | Category</title>
            </Helmet>
            <Cover img={img} title={"OUR Collection"}
                details={"Would you like to try a chocolate?"}
            ></Cover>
            <SectionTitle
                heading={"Today's offer"}
                subheading={"Don't miss"}
            ></SectionTitle>
            {/* offered package */}
            <MenuCategory coverImg={img} items={gift_item}></MenuCategory>
            {/* single chocolate list */}
            <MenuCategory coverImg={singleimg} title={"Chocolate List"} items={single_chocolate}></MenuCategory>
            {/* gift bag */}
            <MenuCategory coverImg={giftImg} title={"Gift Item"} items={gift_item}></MenuCategory>
            {/* custom pack */}
            <MenuCategory coverImg={customImg} title={"Customized Package"} items={custom_pack}></MenuCategory>
            {/* combo pack */}
            <MenuCategory coverImg={customImg} title={"Combo Package"} items={combo_pack}></MenuCategory>
            {/* Top on Demand */}
            <MenuCategory coverImg={topImg} title={"Top On Demand"} items={Top_demand}></MenuCategory>
            {/* Chips */}
            <MenuCategory coverImg={chipsImg} title={"Chips"} items={chips}></MenuCategory>
        </div>
    );
};

export default Menu;