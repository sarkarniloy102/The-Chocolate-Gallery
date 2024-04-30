import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const IsSignup = location.pathname.includes('signin') || location.pathname.includes('signup');

    return (
        <div className="max-w-screen-xl mx-auto ">
            {IsSignup || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;