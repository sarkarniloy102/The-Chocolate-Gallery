import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";




const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={"/signin"} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;