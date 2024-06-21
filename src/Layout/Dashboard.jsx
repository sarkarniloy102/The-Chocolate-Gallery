import {  FaCalendar, FaHome, FaJediOrder, FaList, FaPaypal, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaMessage, FaStar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();

    const isAdmin = true;
    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-sky-300">
                <ul className="menu text-white">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={"/dashboard/adminHome"}>
                                    <FaHome ></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/addItems"}>
                                    <FaShoppingCart></FaShoppingCart>
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/manageItems"}>
                                    <FaList></FaList>
                                    Manage Items
                                </NavLink>
                            </li>
                           
                            <li>
                                <NavLink to={"/dashboard/manageOrders"}>
                                    <FaJediOrder></FaJediOrder>
                                    Manage Orders
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={"/dashboard/allUsers"}>
                                    <FaUser></FaUser>
                                   All Users
                                </NavLink>
                            </li>
                           </>

                            : <><li>
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
                                </li></>
                    }

                    {/* divider */}
                    <div className="divider divider-neutral"></div>
                    {/*  */}
                    {/* shared list with admin and user */}
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