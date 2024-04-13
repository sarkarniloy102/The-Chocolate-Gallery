import { NavLink } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import './Featured.css';
import featuredimg from "../../assets/swiper/5.jpg"

const Featured = () => {
    return (
        <div className="bg-image my-10">
            <div className="  bg-text text-black pt-8  ">

                <SectionTitle
                    heading={"FROM Categories"}
                    subheading={"Check it out"}
                ></SectionTitle>

                <div className=" flex flex-col lg:flex-row justify-center items-center gap-10 px-24 pb-16 pt-5">
                    <div>
                        <img className=" w-[550px] h-[300px]" src={featuredimg} alt="featured" />
                    </div>
                    <div className="w-[450px] h-[200px] space-y-2">
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                       <p> <NavLink className="p-3 rounded-xl border-b-4 ">Read More</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;