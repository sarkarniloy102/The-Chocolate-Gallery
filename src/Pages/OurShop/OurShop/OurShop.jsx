import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../../Shared/Cover/Cover';
import coverShop from '../../../assets/backgroundimage/shopCoverr.jpeg'
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import CartMap from '../../../Shared/CartMap/CartMap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const OurShop = () => {

    const [category] = useMenu();
    const Categories = ['Chocolate List', 'Gift Item', 'Customized Package', 'Combo Package', 'Top On Demand', 'Chips'];
    // The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched
    const { OrderCategory } = useParams();
    const initialIndex = Categories.indexOf(OrderCategory);
    const [tabindex, setTabindex] = useState(initialIndex);
    // console.log(OrderCategory);

    const single_chocolate = category.filter(item => item.category === 'Chocolate List')
    const gift_bag = category.filter(item => item.category === 'Gift Bag')
    const custom_pack = category.filter(item => item.category === 'Customized Package')
    const combo_pack = category.filter(item => item.category === 'Combo Package')
    const Top_demand = category.filter(item => item.category === 'Top On Demand')
    const chips = category.filter(item => item.category === 'Chips')

    return (

        <div className='space-y-10'>
            <Helmet>
                <title>TCG | Shop</title>
            </Helmet>
            <Cover img={coverShop} title={"Our shop"} details={"Would you like to try a chocolate?"} ></Cover>

            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
                <TabList className="text-md mb-4 flex justify-center">
                    <Tab>Chocolate List</Tab>
                    <Tab>Gift Item</Tab>
                    <Tab>Customized Package</Tab>
                    <Tab>Combo Package</Tab>
                    <Tab>Top On Demand</Tab>
                    <Tab>Chips</Tab>
                </TabList>
                <TabPanel>
                    <CartMap category={single_chocolate}></CartMap>
                </TabPanel>
                <TabPanel>
                    <CartMap category={gift_bag}></CartMap>
                </TabPanel>
                <TabPanel>
                    <CartMap category={custom_pack}></CartMap>
                </TabPanel>
                <TabPanel>
                    <CartMap category={combo_pack}></CartMap>
                </TabPanel>
                <TabPanel>
                    <CartMap category={Top_demand}></CartMap>
                </TabPanel>
                <TabPanel>
                    <CartMap category={chips}></CartMap>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;