import { FaCalendar, FaHome, FaList, FaPaypal, FaShoppingCart } from "react-icons/fa";
import { FaMessage, FaStar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-sky-300">
                <ul className="menu text-white">
                    <li>
                        <NavLink to={"/dashboard/userHome"}>
                            <FaHome ></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/reservation"}>
                            <FaCalendar ></FaCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/payment"}>
                            <FaPaypal></FaPaypal>
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/cart"}>
                            <FaShoppingCart ></FaShoppingCart>
                            Mycart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/addReview"}>
                            <FaStar></FaStar>
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/bookings"}>
                            <FaList></FaList>
                            My Bookings
                        </NavLink>
                    </li>

                    {/* divider */}
                    <div className="divider divider-neutral"></div>
                    {/*  */}
                    <li>
                        <NavLink to={"/"}>
                            <FaHome ></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contactus"}>
                            <FaMessage></FaMessage>
                            Contact
                        </NavLink>
                    </li>
                </ul>

            </div>
            {/* content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;