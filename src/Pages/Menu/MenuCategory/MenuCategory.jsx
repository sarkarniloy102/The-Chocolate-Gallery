import Cover from "../../../Shared/Cover/Cover";
import MenuItems from "../../../Shared/MenuItems/MenuItems";



const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div className=" my-20">

            {title && <Cover img={coverImg} title={title}
                details={"Would you like to try a chocolate?"}
            ></Cover>}
            {/*  */}
            <div className="grid md:grid-cols-2 gap-4 my-16">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;