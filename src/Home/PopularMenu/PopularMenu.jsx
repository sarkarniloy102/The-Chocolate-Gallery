import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import { NavLink } from "react-router-dom";


const PopularMenu = () => {
    const [menu, setmenu] = useState([]);
    useEffect(() => {
        fetch('popular.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'Popular');
                setmenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From Our Categories"}
                subheading={"Popular Items"}>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <p className="text-black flex justify-center mt-7"> <NavLink className="p-3 rounded-xl border-b-4">View All Category</NavLink></p>
        </section>
    );
};

export default PopularMenu;