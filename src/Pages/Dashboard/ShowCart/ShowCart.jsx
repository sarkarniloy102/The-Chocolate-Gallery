import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ShowCart = () => {
    const [cart, refetch] = useCart();

    console.log(cart);

    const totalPrice = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace("tk", ""), 10);
        return sum + price;
    }, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }

        });
    }

    return (
        <div>
            <h2 className="text-4xl text-center text-yellow-600 my-10"> My Order</h2>

            <div className=" mx-auto py-6  rounded-xl shadow-lg border w-[75%]">
                <div className="flex justify-evenly items-center">
                    <h2 className="text-3xl text-black">Number of Orders: {cart.length}</h2>
                    <h2 className="text-3xl text-black">Total Price: {totalPrice}Tk</h2>
                    <button className="btn btn-secondary">Pay</button>
                </div>
                {/* table */}
                <div className="overflow-x-auto m-10 rounded-md shadow-lg border text-black">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-yellow-500 text-white text-normal">
                            <tr>
                                <th>Serial No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Auction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* map cart */}
                            {
                                cart.map((item, idx) =>
                                    <tr key={item._id}>
                                        <th> {idx + 1} </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>{item.price}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xl text-red-600" onClick={() => handleDelete(item._id)}><FaTrash></FaTrash></button>
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