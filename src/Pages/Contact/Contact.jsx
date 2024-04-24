import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import contactImg from "../../assets/backgroundimage/contactback.jpeg"
import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <Cover img={contactImg} title={"Contact Us"} details={"would you like to try a chocolate?"}></Cover>

            <SectionTitle heading={"our location"} subheading={"visit us"}></SectionTitle>

            {/* <div className="flex flex-col md:flex-row gap-10 justify-center items-center"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-16 pb-10">
                {/* phone */}
                <div className="border">

                    <div className="bg-orange-500 flex justify-center p-4 "><FaPhone /></div>
                    <div className="p-10 pt-0">
                        <div className="px-3 py-8 text-center rounded-md shadow-xl bg-slate-200 text-black">
                            <p>PHONE</p>
                            <p>123456789</p>
                        </div>
                    </div>

                </div>
                {/* address */}
                <div className="border">

                    <div className="bg-orange-500 flex justify-center p-4 "><FaClock /></div>
                    <div className="p-10 pt-0">
                        <div className="px-3 py-8 text-center rounded-md shadow-xl bg-slate-200 text-black text-xs">
                            <p>WORKING HOURS </p>
                            <p>Mon - Fri: 08:00 - 22:00 <br />
                                Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>

                </div>
                {/* working hours */}
                <div className="border">

                    <div className="bg-orange-500 flex justify-center p-4 ">< FaLocationArrow /></div>
                    <div className="p-10 pt-0">
                        <div className="px-3 py-8 text-center rounded-md shadow-xl bg-slate-200 text-black">
                            <p>ADDRESS</p>
                            <p>123456789</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;