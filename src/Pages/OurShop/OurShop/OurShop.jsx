import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../../Shared/Cover/Cover';
import coverShop from '../../../assets/backgroundimage/shopCoverr.jpeg'
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import CartMap from '../../../Shared/CartMap/CartMap';


const OurShop = () => {
    const [tabindex, setTabindex] = useState(0);
    const [category] = useMenu();
    const single_chocolate = category.filter(item => item.category === 'Chocolate List')
    const gift_bag = category.filter(item => item.category === 'Gift Bag')
    return (
        <div>
            <Cover img={coverShop} title={"Our shop"} details={"Would you like to try a dish?"} ></Cover>

            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                    <Tab>Chocolate List</Tab>
                    <Tab>Gift Item</Tab>
                    <Tab>Customized Package</Tab>
                    <Tab>Simple Gift Pack</Tab>
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
            </Tabs>
        </div>
    );
};

export default OurShop;