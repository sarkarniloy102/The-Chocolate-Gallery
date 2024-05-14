import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?emai=${user.email}`,)
            return res.data;
        },

    })
    return [cart];
};

export default useCart;