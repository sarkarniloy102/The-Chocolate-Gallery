import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SingleCart from "./SingleCart";


const Cart = () => {
    const [cart, setcart] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setcart(popularItems)
            })
    }, [])
    return (
        <div>
            <div>
                <SectionTitle
                    heading={"CHEF RECOMMENDS"}
                    subheading={"should try"}
                ></SectionTitle>
            </div>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        cart.map(item =>
                            <SingleCart
                                key={item._id}
                                item={item}
                            >

                            </SingleCart>

                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default Cart;