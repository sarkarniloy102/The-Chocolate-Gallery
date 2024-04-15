import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../../Shared/Cover/Cover';
import coverShop from '../../../assets/backgroundimage/shopCoverr.jpeg'
import { useState } from 'react';

const OurShop = () => {
    const [tabindex, setTabindex] = useState(0);
    return (
        <div>
            <Cover img={coverShop} title={"Our shop"} details={"Would you like to try a dish?"} ></Cover>

            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                    <Tab>Chocolate List</Tab>
                    <Tab>Customized Package</Tab>
                    <Tab>Simple Gift Pack</Tab>
                    <Tab>Combo Package</Tab>
                    <Tab>Top On Demand</Tab>
                    <Tab>Gift Item</Tab>
                    <Tab>Chips</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;