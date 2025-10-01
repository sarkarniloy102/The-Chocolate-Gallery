import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { GoPackageDependents } from "react-icons/go";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

// for image hosting in Imagebb 
const Image_Hosting_Key = import.meta.env.VITE_image_hosting_key;
const Image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Key}`;
const UpdateItem = () => {

    const item = useLoaderData();
    console.log(item);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(Image_Hosting_Api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // send data to the server
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: data.price,
                details: data.details,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/allcategory', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is added to category collection`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    }
    return (
        <div className="m-5 ">
            <SectionTitle heading={'Update Item'}></SectionTitle>
            <div className="bg-gray-200 p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    {/* name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black">Product name</span>
                        </label>
                        <input{...register("name",)}
                            required
                            type="text" placeholder="chocolate or package name" className="input input-bordered w-full bg-white text-black" />
                    </div>

                    {/* catagory and price */}
                    <div className=" flex gap-10 items-center">
                        {/* catagory */}
                        <div className="form-control w-full flex-wrap">
                            <label className="label">
                                <span className="label-text text-black">Category</span>
                            </label>
                            <select defaultValue={"default"} {...register("category")}
                                className="select select-bordered w-full text-black bg-white">
                                <option disabled value="default">Category</option>
                                <option value="ChocolateList">Chocolate List</option>
                                <option value="GiftItem">Gift Item</option>
                                <option value="CustomizedPackage">Customized Package</option>
                                <option value="ComboPackage">Combo Package</option>
                                <option value="TopOnDemand">Top On Demand</option>
                                <option value="Chips">Chips</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full  flex-wrap">
                            <label className="label">
                                <span className="label-text text-black">Price</span>
                            </label>
                            <input{...register("price")}
                                required
                                type="text" placeholder="price" className="input input-bordered text-black w-full bg-white" />
                        </div>
                    </div>
                    {/* details */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-black">Details</span>
                        </label>
                        <textarea {...register("details")}
                            required
                            className="textarea textarea-bordered text-black h-40 bg-white" placeholder="product details"></textarea>
                    </div>

                    {/* file input */}
                    <div className="form-control w-full my-6">
                        <input {...register("image")}
                            required
                            type="file" className="file-input file-input-bordered w-full bg-white" />
                    </div>



                    <button className="btn  w-full bg-slate-600 text-yellow-500">Update Item Details <GoPackageDependents />

                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;