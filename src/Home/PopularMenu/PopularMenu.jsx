
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import { NavLink } from "react-router-dom";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {
    const [category] = useMenu();
    const popular = category.filter(item => item.category === 'Chocolate List')
    // const [menu, setmenu] = useState([]);
    // useEffect(() => {
    //     fetch('popular.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'Popular');
    //             setmenu(popularItems)
    //         })
    // }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From Our Categories"}
                subheading={"Popular Items"}>
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <p className="text-black flex justify-center mt-7"> <NavLink to={'/menu'} className="p-3 rounded-xl border-b-4">View All Category</NavLink></p>
        </section>
    );
};

export default PopularMenu;