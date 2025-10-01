import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import SignUp from "../Pages/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ShowCart from "../Pages/Dashboard/ShowCart/ShowCart";
import Allusers from "../Pages/Dashboard/Admin/Allusers/Allusers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: '/ourshop/:OrderCategory',
                element: <OurShop></OurShop>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/contactus",
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            // normal users routes

            {
                path: "cart",
                element: <ShowCart></ShowCart>
            },

            // Admin routes
            {
                path: "additems",
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
                // element: <AddItems></AddItems>

            }
            ,
            {
                path: "allUsers",
                element: <AdminRoute><Allusers></Allusers></AdminRoute>

                // element: <Allusers></Allusers>

            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`the-chocolate-gallery-server.vercel.app/allcategory/${params.id}`)
            }
        ]
    }
]);