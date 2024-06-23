import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrash, FaUserSecret } from "react-icons/fa";
import Swal from "sweetalert2";

const Allusers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // delete user
    const handleDelete = user => {

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
                axiosSecure.delete(`/users/${user._id}`)
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

    // update role admin/moderator
    const handleRole = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Role Changed",
                                text: `${user.name} is admin now`,
                                icon: "success"
                            });
                        }
                    })
            }

        });
    }

    return (
        <div>
            <SectionTitle heading={"MANAGE USERS"} subheading={"How Many?"} ></SectionTitle>
            <div className=" mx-auto py-6  rounded-xl shadow-lg border w-[75%]">
                <div className="flex justify-evenly items-center">
                    <h2 className="text-3xl text-black">Total Users: {users.length}</h2>

                </div>
                {/* table */}
                <div className="overflow-x-auto m-10 rounded-md shadow-lg border text-black">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-yellow-500 text-white text-normal">
                            <tr className="text-lg">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Auction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* map cart */}
                            {
                                users.map((user, idx) =>
                                    <tr key={user._id}>
                                        <th> {idx + 1} </th>

                                        <td>
                                            {user.name}
                                        </td>
                                        <td>{user.email}</td>

                                        <th>
                                            {user.role === 'admin' ? 'Admin' :
                                                <button onClick={() => handleRole(user)} className="btn btn-ghost  " ><FaUserSecret className="text-xl" /></button>
                                            }
                                        </th>

                                        <th>
                                            <button onClick={() => handleDelete(user)} className="btn btn-ghost  text-red-600" ><FaTrash className="text-xl"></FaTrash></button>
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

export default Allusers;