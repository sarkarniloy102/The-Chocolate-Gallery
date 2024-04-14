import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";

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
                path: "/ourshop",
                element: <OurShop></OurShop>
            }
        ]
    },
]);