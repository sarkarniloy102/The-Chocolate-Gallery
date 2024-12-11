import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const UpdateItem = () => {

    const item = useLoaderData();
    console.log(item);
    return (
        <div>
            <SectionTitle heading={'Update Item'}></SectionTitle>
        </div>
    );
};

export default UpdateItem;