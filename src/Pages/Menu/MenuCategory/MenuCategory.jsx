import { NavLink } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItems from "../../../Shared/MenuItems/MenuItems";



const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div className=" my-20">

            {title && <Cover img={coverImg} title={title}
                details={"Would you like to try a chocolate?"}
            ></Cover>}
            {/*  */}
            <div className="grid md:grid-cols-2 gap-4 mt-9 ">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <p className="text-black flex justify-center mt-7 mb-20"> <NavLink className="p-3 rounded-xl border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</NavLink></p>

        </div>
    );
};

export default MenuCategory;