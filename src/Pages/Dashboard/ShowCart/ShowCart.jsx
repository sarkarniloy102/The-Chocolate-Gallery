import useCart from "../../../Hooks/useCart";


const ShowCart = () => {
    const [cart] = useCart();

    const totalPrice = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace("tk", ""), 10);
        return sum + price;
    }, 0);
    return (
        <div>
            <h2 className="text-4xl text-center text-yellow-600 my-10"> My Order</h2>

            <div className=" mx-auto py-6  rounded-xl shadow-lg border w-[75%]">
                <div className="flex justify-evenly items-center">
                    <h2 className="text-3xl text-black">Number of Orders: {cart.length}</h2>
                    <h2 className="text-3xl text-black">Total Price: {totalPrice}</h2>
                    <button className="btn btn-secondary">Pay</button>
                </div>
                {/* table */}
                <div className="overflow-x-auto m-5 rounded-md shadow-lg border">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-yellow-500 text-white text-normal">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Auction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* map cart */}
                            {
                                cart.map(item =>
                                    <tr key={item._id}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Hart Hagerty</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                )
                            }


                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default ShowCart;