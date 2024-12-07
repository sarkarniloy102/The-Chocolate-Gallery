import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
const AddItems = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="m-10 ">
            <SectionTitle heading={'add an item'} subheading={"what's new"}></SectionTitle>

            <div className="bg-gray-200 p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    {/* name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black">Product name</span>
                        </label>
                        <input{...register("name")}
                            type="text" placeholder="chocolate or package name" className="input input-bordered w-full bg-white" />
                    </div>

                    {/* catagory and price */}
                    <div className=" flex gap-10 items-center">
                        {/* catagory */}
                        <div className="form-control w-full flex-wrap">
                            <label className="label">
                                <span className="label-text text-black">Category</span>
                            </label>
                            <select {...register("category")}
                                className="select select-bordered w-full bg-white">
                                <option disabled selected>Category</option>
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
                                type="number" placeholder="price" className="input input-bordered w-full bg-white" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-black">Details</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-40 bg-white" placeholder="product details"></textarea>
                    </div>

                    {/* file input */}
                    <div className="form-control w-full my-6">
                    <input type="file" className="file-input file-input-bordered w-full bg-white" />
                    </div>



                    <button className="btn  w-full">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;