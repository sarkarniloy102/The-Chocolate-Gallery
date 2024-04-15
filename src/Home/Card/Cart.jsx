import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// import SingleCart from "./SingleCart";
import CartMap from "../../Shared/CartMap/CartMap";


const Cart = () => {
    const [cart, setcart] = useState([]);
    useEffect(() => {
        fetch('popular.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'Popular');
                setcart(popularItems)
            })
    }, [])
    return (
        <div className="mb-16 md:mb-24">
            <div>
                <SectionTitle
                    heading={"Seller RECOMMENDS"}
                    subheading={"should try"}
                ></SectionTitle>
            </div>
            <section>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        cart.map(item =>
                            <SingleCart
                                key={item._id}
                                item={item}
                            >

                            </SingleCart>

                        )
                    }
                </div> */}
                <CartMap category={cart}></CartMap>
            </section>
        </div>
    );
};

export default Cart;