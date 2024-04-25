import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import contactImg from "../../assets/backgroundimage/contactback.jpeg"
import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>TCG | contact</title>
            </Helmet>
            <Cover img={contactImg} title={"Contact Us"} details={"would you like to try a chocolate?"}></Cover>
            {/* part 1 */}
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

            {/* part 2 */}
            <SectionTitle heading={"contact form"} subheading={"Send Us a Message"}></SectionTitle>

            {/* form */}
            <section className="p-6 ">
                <form className="container w-full max-w-4xl p-8 mx-auto space-y-6 rounded-md shadow bg-slate-300">
                    {/* <h2 className="w-full text-3xl font-bold leadi text-black">Contact us</h2> */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* nmae */}
                        <div>
                            <label htmlFor="name" className="block mb-1 ml-1 text-black ">Name*</label>
                            <input id="name" type="text" placeholder="Your name" required="" className="block bg-white w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri " />
                        </div>
                        {/* phone */}
                        <div>
                            <label htmlFor="name" className="block mb-1 ml-1 text-black ">Phone*</label>
                            <input id="name" type="number" placeholder="Your phone number" required="" className="block bg-white w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri " />
                        </div>
                    </div>
                    {/* email */}
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1 text-black">Email*</label>
                        <input id="email" type="email" placeholder="Your email" required="" className="block bg-white w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri " />
                    </div>
                    {/* message */}
                    <div>
                        <label htmlFor="message" className="block mb-1 ml-1 text-black">Message*</label>
                        <textarea id="message" type="text" placeholder="Message..."
                            rows="8" cols="50"
                            className="block bg-white w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri "></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-violet-400 focus:ri hover:ri dark:text-gray-900">Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;