import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/logoo.jpg"

const Navbar = () => {

    const navlink =
        <>
            <NavLink>HOME</NavLink>
            <NavLink>CONTACT US</NavLink>
            <NavLink>DASHBOARD</NavLink>
            <NavLink>OUR MENU</NavLink>
            <NavLink>OURSHOP</NavLink>

        </>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu gap-5 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={logo} className="w-16 h-16 rounded-full" alt="" /></a>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu gap-5 menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className=""><NavLink className="flex items-center gap-1"><p>SIGN IN</p> <CgProfile className="text-xl" />
</NavLink> </a>
            </div>
        </div>
    );
};

export default Navbar;