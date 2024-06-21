import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrash, FaUserSecret } from "react-icons/fa";

const Allusers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
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
                            <tr>
                                <th>Serial No</th>
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
                                    <tr  key={user._id}>
                                        <th> {idx + 1} </th>

                                        <td>
                                            {user.name}
                                        </td>
                                        <td>{user.email}</td>

                                        <th>
                                            <button className="btn btn-ghost  " ><FaUserSecret className="text-xl" /></button>
                                        </th>

                                        <th>
                                            <button className="btn btn-ghost  text-red-600" ><FaTrash className="text-xl"></FaTrash></button>
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