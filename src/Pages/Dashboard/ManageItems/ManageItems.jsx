import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";


const ManageItems = () => {
    const [category, refetch] = useMenu();

    const axiosSecure = useAxiosSecure();
    // const { data: category = [], refetch } = useQuery({
    //     queryKey: ["category"],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/allcategory');
    //         return res.data;
    //     }
    // })

    const handleDeleteItem = item => {
        console.log(item)
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
                axiosSecure.delete(`/allcategory/${item._id}`)
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
            <SectionTitle heading={'manage all items'} subheading={"Hurry Up"}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="p-2 bg-[#D1A054] text-white">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                category.map((item, idx) => <tr key={item._id} className="text-black">
                                    <td>{idx + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="item image" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className="btn btn-ghost  text-[#D1A054]" ><FaEdit className="text-xl"></FaEdit></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost  text-red-600" ><FaTrash className="text-xl"></FaTrash></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;