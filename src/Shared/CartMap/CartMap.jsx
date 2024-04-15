import SingleCart from "../../Home/Card/SingleCart";


const CartMap = ({ category }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    category.map(item =>
                        <SingleCart
                            key={item._id}
                            item={item}
                        >

                        </SingleCart>
                    )
                }
            </div>
        </div>
    );
};

export default CartMap;